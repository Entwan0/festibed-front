import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryAPI } from '../model';

describe('CategoryService', () => {
  let srv: CategoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    srv = TestBed.inject(CategoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('list', () => {
    it('should return the listFestival of categories', () => {
      const categories: CategoryAPI[] = [
        { id: 0, name: 'A' },
        { id: 1, name: 'B' },
      ];

      srv.list().subscribe((list) => {
        expect(list).toBe(categories);
      });

      const req = httpMock.expectOne(`${environment.api.url}/categories`);
      expect(req.request.method).toBe('GET');
      req.flush(categories);

      httpMock.verify();
    });
  });
});
