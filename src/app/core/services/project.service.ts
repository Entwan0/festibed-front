import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProjectAPI } from '../model/api/project';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends BaseService<ProjectAPI> {
  constructor(private http: HttpClient) {
    super(http, 'projects');
  }

  listByUserId(userId: number | undefined): Observable<ProjectAPI[]> {
    return this.http.get<ProjectAPI[]>(
      environment.api.url +
        '/projects?join=client&filter=client.id||$eq||' +
        userId +
        '&filter=software.id||notnull',
    );
  }
}
