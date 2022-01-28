import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { VersionAPI } from '../../model/api/old/version';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  constructor(private http: HttpClient) {}

  list(): Observable<VersionAPI[]> {
    return this.http.get<VersionAPI[]>(environment.api.url + '/software/versions');
  }
}
