import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SoftwareAPI } from '../model/api/software';
import { ProjectAPI } from '../model/api/project';

@Injectable({
  providedIn: 'root',
})
export class SoftwareService {
  constructor(private http: HttpClient) {}

  list(): Observable<SoftwareAPI[]> {
    return this.http.get<SoftwareAPI[]>(environment.api.url + '/software');
  }

  listByProject(userId: number | undefined): Observable<ProjectAPI[]> {
    return this.http.get<ProjectAPI[]>(
      environment.api.url + '/software?filter=?join=client&s={"client.id":' + userId + '}',
    );
  }
}
