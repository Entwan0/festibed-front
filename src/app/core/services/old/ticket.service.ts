import { Injectable } from '@angular/core';
import { Observable, combineLatest, switchMap, last, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { RequestQueryBuilder, SConditionAND } from '@nestjsx/crud-request';
import { SFields } from '@nestjsx/crud-request/lib/types/request-query.types';
import { map } from 'rxjs/operators';
import { AttachmentAPI, GetManyDefaultResponse, TuiSortDirection } from '../../model';
import { TicketAPI } from '../../model';
import { TuiFileLike } from '@taiga-ui/kit';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}

  list(): Observable<TicketAPI[]> {
    return this.http.get<TicketAPI[]>(environment.api.url + '/tickets');
  }

  getTickets(
    statusFilter: Record<string, any>,
    columnSorted: keyof TicketAPI,
    directionSort: TuiSortDirection,
    limit: number,
    offset: number,
    filters?: string,
  ) {
    // Sort objects by a primary value
    let sorted: string = columnSorted;
    switch (columnSorted) {
      case 'tag':
        sorted = 'tag.name';
        break;

      case 'priority':
        sorted = 'priority.id';
        break;

      case 'status':
        sorted = 'status.id';
        break;

      case 'client':
        sorted = 'contact.surname';
        break;
    }

    let qb = RequestQueryBuilder.create({
      limit,
      offset,
    });

    let path = '/tickets?';
    const and: Array<SFields | SConditionAND> = [];

    // If filters is present and not empty, fuzzy search it
    if (typeof filters === 'string' && !!filters) {
      and.push(
        ...filters.split(' ').map((word) => {
          return {
            $or: [
              'id',
              'uniqueName',
              'title',
              'status.name',
              'creationDate',
              'updateDate',
              'priority.name',
              'tag.name',
              'contact.surname',
              'contact.name',
              'details',
            ].map((prop) => ({
              [prop]: {
                $cont: word,
              },
            })),
          };
        }),
      );
    }

    if (statusFilter) {
      and.push(statusFilter);
    }

    qb.search({
      $and: and,
    });

    qb.sortBy({
      field: sorted,
      order: directionSort === TuiSortDirection.DESC ? 'DESC' : 'ASC',
    });

    path += qb.query();

    return this.http.get<GetManyDefaultResponse<TicketAPI>>(environment.api.url + path);
  }

  getOneWithId(idTicket: number): Observable<TicketAPI> {
    return this.http.get<TicketAPI>(environment.api.url + '/tickets/' + idTicket);
  }

  post(ticket: TicketAPI, files: File[]): Observable<TicketAPI> {
    return this.http.post<TicketAPI>(environment.api.url + '/tickets', ticket).pipe(
      switchMap((ticket) => {
        return this.addAttachments(ticket, files).pipe(
          map((attachments) => {
            ticket.attachments = attachments;
            return ticket;
          }),
        );
      }),
    );
  }

  replace(
    ticket: TicketAPI,
    filesToAdd: File[],
    filesToRemove: TuiFileLike[],
  ): Observable<TicketAPI> {
    return this.http.put<TicketAPI>(`${environment.api.url}/tickets/${ticket.id}`, ticket).pipe(
      switchMap((ticket) => {
        return combineLatest([
          this.addAttachments(ticket, filesToAdd),
          this.deleteAttachments(filesToRemove),
        ]).pipe(
          last(),
          map(() => ticket),
        );
      }),
    );
  }

  addAttachments(ticket: TicketAPI, files: File[]): Observable<AttachmentAPI[]> {
    const observables: Observable<AttachmentAPI>[] = [];
    for (const file of files) {
      const data = new FormData();
      data.set('file', file, file.name);
      data.set('ticketID', ticket.id.toString());

      observables.push(this.http.post<AttachmentAPI>(environment.api.url + '/attachments', data));
    }

    if (observables.length === 0) {
      return of([]);
    }

    return combineLatest(observables).pipe(last());
  }

  deleteAttachments(files: TuiFileLike[]): Observable<AttachmentAPI[]> {
    if (files.length === 0) {
      return of([]);
    }

    return combineLatest(
      files.map((file) => this.http.delete<AttachmentAPI>(file.src as string)),
    ).pipe(last());
  }
}
