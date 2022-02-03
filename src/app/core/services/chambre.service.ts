import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ChambreAPI } from '../model/api/chambre';

@Injectable({
  providedIn: 'root',
})
export class ChambreService {
  constructor(private http: HttpClient) {}

  listByFestivalId(festivalId: string | null): Observable<ChambreAPI[]> {
    return this.http.get<ChambreAPI[]>(environment.api.url + '/chambre/byFestivalId' + festivalId);
  }

  nbrChambreByFestivalAndHotel(
    festivalId: string | null,
    nomHotel: string | null,
  ): Observable<any> {
    return this.http.get<any>(
      environment.api.url + '/logement/chambre/byFestivalAndHotel/' + festivalId + '/' + nomHotel,
    );
  }
}
