import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { StatusAPI } from '../../model';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  constructor(private http: HttpClient) {}

  list(): Observable<StatusAPI[]> {
    return this.http.get<StatusAPI[]>(environment.api.url + '/status');
  }

  getById(id: string): Observable<StatusAPI> {
    return this.http.get<StatusAPI>(environment.api.url + '/status/' + id);
  }
}
