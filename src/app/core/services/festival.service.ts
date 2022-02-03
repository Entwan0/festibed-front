import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestQueryBuilder, SConditionAND } from '@nestjsx/crud-request';
import { FestivalAPI } from '../model/api/festival';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FestivalService {
  constructor(private http: HttpClient) {}

  list(page: number): Observable<{ content: FestivalAPI[]; totalPages: number }> {
    return this.http.get<{ content: FestivalAPI[]; totalPages: number }>(
      environment.api.url + '/festival/getAll?page=' + page + '&size=9',
    );
  }

  listAll(): Observable<FestivalAPI[]> {
    return this.http.get<FestivalAPI[]>(environment.api.url + '/festival/getAll');
  }

  getById(id: string): Observable<FestivalAPI> {
    return this.http.get<FestivalAPI>(environment.api.url + '/festival/getById/' + id);
  }

  getByCity(city: string): Observable<{ content: FestivalAPI[]; totalPages: number }> {
    return this.http.get<{ content: FestivalAPI[]; totalPages: number }>(
      environment.api.url + '/festival/byCity/' + city,
    );
  }
}
