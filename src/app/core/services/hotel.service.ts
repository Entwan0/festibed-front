import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HotelAPI } from '../model/api/hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private http: HttpClient) {}

  listByFestivalId(festivalId: string | null): Observable<HotelAPI[]> {
    return this.http.get<HotelAPI[]>(
      environment.api.url + '/etablissement/hotel/byFestivalId/' + festivalId,
    );
  }

  getOne(hotelNomCommercial: string): Observable<HotelAPI[]> {
    return this.http.get<HotelAPI[]>(
      environment.api.url + '/etablissement/hotel/byId/' + hotelNomCommercial,
    );
  }
}
