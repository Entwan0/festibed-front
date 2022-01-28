import { Injectable } from '@angular/core';
import { FestivalAPI } from '../model/api/festival';

@Injectable()
export class PanierService {
  private element: { festival: FestivalAPI }[] = [];

  setFestival(data: { festival: FestivalAPI }[]) {
    this.element = data;
  }

  getFestivals(): { festival: FestivalAPI }[] {
    return this.element;
  }
}
