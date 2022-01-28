import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, share, shareReplay, switchMap, tap } from 'rxjs';
import { environment } from '../../../../../Downloads/extranet-develop (1)/extranet-develop/src/environments/environment';
import { UserAPI } from '../../../../../Downloads/extranet-develop (1)/extranet-develop/src/app/core/model';
import { Router } from '@angular/router';

interface LoginOutput {
  user: UserAPI;
  jwt: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _jwt$ = new BehaviorSubject<string | null>(null);

  readonly user$: Observable<UserAPI | null> = this._jwt$.pipe(
    switchMap((jwt) => {
      if (jwt) {
        return this.http.get<UserAPI>(environment.api.url + '/users/me');
      } else {
        return of(null);
      }
    }),
    shareReplay(),
  );

  constructor(private http: HttpClient, private router: Router) {
    const storedJWT = localStorage.getItem('jwt');
    if (storedJWT) {
      this._jwt$.next(storedJWT);
    }
  }

  get authenticated(): boolean {
    return !!this._jwt$.getValue();
  }

  get jwt() {
    return this._jwt$.getValue();
  }

  login(username: string, password: string): Observable<LoginOutput> {
    return this.http
      .post<LoginOutput>(environment.api.url + '/auth/login', {
        username: username,
        password: password,
      })
      .pipe(
        tap((res) => {
          this._jwt$.next(res.jwt);

          localStorage.setItem('jwt', res.jwt);

          this.router.navigate(['/ticket/list']).then();
        }),
      );
  }

  logout() {
    localStorage.removeItem('jwt');
    this._jwt$.next(null);
    this.router.navigateByUrl('/').then();
  }
}
