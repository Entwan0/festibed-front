import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class BaseService<T> {
  protected readonly resources: string;
  protected readonly resource: string;

  protected constructor(protected httpCtrl: HttpClient, resource: string) {
    this.resources = environment.api.url + '/' + resource;
    this.resource = this.resources + '/';
  }

  getAll(): Observable<T[]> {
    return this.httpCtrl.get<T[]>(this.resources);
  }

  getById(id: number): Observable<T> {
    return this.httpCtrl.get<T>(this.resource + id);
  }

  add(obj: Partial<T>): Observable<T> {
    return this.httpCtrl.post<T>(this.resources, obj);
  }

  update(id: number, change: Partial<T>): Observable<T> {
    return this.httpCtrl.put<T>(this.resource + id, change);
  }

  remove(id: number): Observable<T> {
    return this.httpCtrl.delete<T>(this.resource + id);
  }
}
