import { Injectable } from '@angular/core';
import { FestivalAPI } from '../model/api/festival';

@Injectable()
export class PanierService {
  private element: FestivalAPI[] = [];

  setFestival(data: FestivalAPI[]) {
    this.element = data;
  }

  getFestivals(): FestivalAPI[] {
    return this.element;
  }
}
