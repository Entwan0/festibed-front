import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FestivalAPI } from '../model/api/festival';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FestivalService {
  constructor(private http: HttpClient) {}

  list(): Observable<FestivalAPI[]> {
    return this.http.get<FestivalAPI[]>(environment.api.url + '/api/festival/getAll');
  }
}
