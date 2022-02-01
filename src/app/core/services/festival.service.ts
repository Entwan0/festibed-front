import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestQueryBuilder, SConditionAND } from '@nestjsx/crud-request';
import { FestivalAPI } from '../model/api/festival';
import { environment } from '../../../environments/environment';
import {SFields} from "@nestjsx/crud-request/lib/types/request-query.types";

@Injectable({
  providedIn: 'root',
})
export class FestivalService {
  constructor(private http: HttpClient) {}

  list(): Observable<FestivalAPI[]> {
    return this.http.get<FestivalAPI[]>(environment.api.url + '/api/festival/getAll');
  }

  getById(id: number): Observable<FestivalAPI> {
    return this.http.get<FestivalAPI>(environment.api.url + '/api/festival/getById/' + id);
  }

  getByCity(city: string): Observable<FestivalAPI[]> {
    return this.http.get<FestivalAPI[]>(environment.api.url + '/api/festival/byCity/' + city);
  }
}
