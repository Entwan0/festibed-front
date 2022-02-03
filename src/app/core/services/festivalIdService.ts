import { Injectable } from '@angular/core';

@Injectable()
export class FestivalIdService {
  private element: string = '';

  setFestival(data: string) {
    this.element = data;
  }

  getFestivals(): string {
    return this.element;
  }
}
