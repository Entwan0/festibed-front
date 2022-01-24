import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CondOperator, RequestQueryBuilder, SConditionAND } from '@nestjsx/crud-request';
import { SFields } from '@nestjsx/crud-request/lib/types/request-query.types';
import { ClientAPI, ContactAPI } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  list(): Observable<ContactAPI[]> {
    return this.http.get<ContactAPI[]>(environment.api.url + '/contacts');
  }

  searchByContact(contact: string, customer: ClientAPI): Observable<ContactAPI[]> {
    let qb = RequestQueryBuilder.create();

    const and: Array<SFields | SConditionAND> = [];

    and.push({
      $or: [
        {
          nom: {
            $cont: contact,
          },
        },
        {
          prenom: {
            $cont: contact,
          },
        },
      ],
    });

    qb.search({
      $and: and,
    });

    qb.setFilter({
      field: 'client.id',
      operator: CondOperator.EQUALS,
      value: customer.id,
    });

    return this.http.get<ContactAPI[]>(environment.api.url + '/contacts?join=client&' + qb.query());
  }
}
