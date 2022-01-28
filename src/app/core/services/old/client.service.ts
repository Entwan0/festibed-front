import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CondOperator, RequestQueryBuilder } from '@nestjsx/crud-request';
import { ClientAPI } from '../../model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  list(): Observable<ClientAPI[]> {
    return this.http.get<ClientAPI[]>(environment.api.url + '/clients');
  }

  search(client: string): Observable<ClientAPI[]> {
    let qb = RequestQueryBuilder.create();

    qb.setFilter({
      field: 'name',
      operator: CondOperator.CONTAINS,
      value: client,
    });

    return this.http.get<ClientAPI[]>(environment.api.url + '/clients?' + qb.query());
  }
}
