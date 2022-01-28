import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { routes } from '../../app-routing.module';
import { environment } from '../../../environments/environment';

describe('AuthService', () => {
  let srv: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)],
    });

    srv = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('login', () => {
    it('should try to login', () => {
      srv.login('bob', '1234').subscribe();

      const req = httpMock.expectOne(`${environment.api.url}/auth/login`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual({ username: 'bob', password: '1234' });

      httpMock.verify();
    });

    it('should login with correct credentials', () => {
      srv.login('bob', '1234').subscribe((v) => {
        expect(v).toEqual({ user: <any>'bob', jwt: 'nice' });
      });

      httpMock.expectOne(`${environment.api.url}/auth/login`).flush({ user: 'bob', jwt: 'nice' });

      httpMock.verify();
    });

    it('should stock jwt in localStorage', () => {
      srv.login('bob', '1234').subscribe((v) => {
        expect(v).toEqual({ user: <any>'bob', jwt: 'nice' });
      });

      httpMock.expectOne(`${environment.api.url}/auth/login`).flush({ user: 'bob', jwt: 'nice' });

      expect(localStorage.getItem('jwt')).toBe('nice');
      localStorage.removeItem('jwt');
    });

    it('should error when credentials are invalid', () => {
      srv.login('bob', '1234').subscribe({
        next: () => {
          expect(true).toBe(false); // Next shouldn't be run
        },
        error: (e: HttpErrorResponse) => {
          expect(e.status).toBe(400);
        },
      });

      httpMock
        .expectOne(`${environment.api.url}/auth/login`)
        .flush({ message: 'Bad Request' }, { status: 400, statusText: 'Bad Request' });

      httpMock.verify();
    });
  });

  describe('logout', () => {
    beforeEach(() => {
      srv.login('bob', '1234').subscribe();
      httpMock.expectOne(`${environment.api.url}/auth/login`).flush({ user: 'bob', jwt: 'nice' });
    });

    it('should log out the user', () => {
      expect(srv.authenticated).toBe(true);
      srv.logout();
      expect(srv.authenticated).toBe(false);
    });

    it("should delete localStorage's JWT", () => {
      srv.logout();
      expect(localStorage.getItem('jwt')).toBe(null);
    });
  });
});
