import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjoutPanierService } from '../../../../core/services/ajout-panier.service';
import { PanierService } from '../../../../core/services/panierService';
import { FestivalAPI } from '../../../../core/model/api/festival';
import { EnleverPanierService } from '../../../../core/services/enlever-panier.service';
import { ChambreAPI } from '../../../../core/model/api/chambre';
import { HotelService } from '../../../../core/services/hotel.service';

@Component({
  selector: 'app-ticket-list-item,[ticket]',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanierFormComponent implements OnInit {
  panier: {
    dateReservation: Date;
    montant: number;
    nombrePass: number;
    festival: FestivalAPI;
    nomHotel: string;
    nbrChambreSimple: number;
    nbrChambreDouble: number;
    nbrChambreFamilial: number;
  }[] = [];

  constructor(
    private router: Router,
    private _ajoutPanierService: AjoutPanierService,
    private _enleverPanierService: EnleverPanierService,
    private _panierService: PanierService,
    private _hotelService: HotelService,
  ) {}

  ngOnInit(): void {
    this.panier = this._panierService.getFestivals();
  }

  enleverPanier(idPanier: number) {
    this._enleverPanierService.emitChange(idPanier);
    this.panier = this._panierService.getFestivals();
  }

  enleverQuantite(element: FestivalAPI) {
    if (element.quantitePanier > 1) {
      this.panier?.forEach((value, index) => {
        if (value.festival.idPanier === element.idPanier)
          this.panier[index].festival.quantitePanier--;
      });
    }
  }

  ajouterQuantite(element: FestivalAPI) {
    this.panier?.forEach((value, index) => {
      if (value.festival.idPanier === element.idPanier)
        this.panier[index].festival.quantitePanier++;
    });
  }

  get sum() {
    let sum = 0;
    this.panier.forEach((p, index) => {
      sum += p.festival.prixPass * p.festival.quantitePanier;
    });
    return sum;
  }

  reserver() {
    for (let element of this.panier) {
      console.log({
        dateReservation: element.dateReservation,
        montant: element.montant,
        nombrePass: element.nombrePass,
        ndeg: element.festival.ndeg,
        nomHotel: element.nomHotel,
        nbrChambreSimple: element.nbrChambreSimple,
        nbrChambreDouble: element.nbrChambreDouble,
        nbrChambreFamilial: element.nbrChambreFamilial,
      });
      this._hotelService
        .post({
          dateReservation: element.dateReservation,
          montant: element.montant,
          nombrePass: element.nombrePass,
          ndeg: element.festival.ndeg,
          nomCommercial: element.nomHotel,
          nbChambresSimples: element.nbrChambreSimple,
          nbChambresDoubles: element.nbrChambreDouble,
          nbChambresFamiliales: element.nbrChambreFamilial,
        })
        .subscribe((result) => {});
    }
  }
}
