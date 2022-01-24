import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TagAPI } from '../model';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor(private http: HttpClient) {}

  list(): Observable<TagAPI[]> {
    return this.http.get<TagAPI[]>(environment.api.url + '/tags');
  }
}
