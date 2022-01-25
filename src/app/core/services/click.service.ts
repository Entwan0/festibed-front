import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClickService {
  private _onClick$ = new Subject<MouseEvent>();

  /** @emit when user clicks on the page */
  onClick$ = this._onClick$.asObservable();

  next(e: MouseEvent) {
    this._onClick$.next(e);
  }
}
