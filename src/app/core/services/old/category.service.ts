import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CategoryAPI } from '../../model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  list(): Observable<CategoryAPI[]> {
    return this.http.get<CategoryAPI[]>(environment.api.url + '/categories');
  }
}
