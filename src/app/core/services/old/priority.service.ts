import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PriorityAPI } from '../../model';

@Injectable({
  providedIn: 'root',
})
export class PriorityService {
  constructor(private http: HttpClient) {}

  list(): Observable<PriorityAPI[]> {
    return this.http.get<PriorityAPI[]>(environment.api.url + '/priorities');
  }
}
