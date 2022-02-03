import { Injectable } from '@angular/core';
import { FestivalAPI } from '../model/api/festival';
import { ChambreAPI } from '../model/api/chambre';

@Injectable()
export class PanierService {
  private element: {
    dateReservation: Date;
    montant: number;
    nombrePass: number;
    festival: FestivalAPI;
    nomHotel: string;
    nbrChambreSimple: number;
    nbrChambreDouble: number;
    nbrChambreFamilial: number;
  }[] = [];

  setFestival(
    data: {
      dateReservation: Date;
      montant: number;
      nombrePass: number;
      festival: FestivalAPI;
      nomHotel: string;
      nbrChambreSimple: number;
      nbrChambreDouble: number;
      nbrChambreFamilial: number;
    }[],
  ) {
    this.element = data;
  }

  getFestivals(): {
    dateReservation: Date;
    montant: number;
    nombrePass: number;
    festival: FestivalAPI;
    nomHotel: string;
    nbrChambreSimple: number;
    nbrChambreDouble: number;
    nbrChambreFamilial: number;
  }[] {
    return this.element;
  }
}
