import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjoutPanierService } from '../../../../core/services/ajout-panier.service';
import { PanierService } from '../../../../core/services/panierService';
import { FestivalAPI } from '../../../../core/model/api/festival';
import { EnleverPanierService } from '../../../../core/services/enlever-panier.service';

@Component({
  selector: 'app-ticket-list-item,[ticket]',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanierFormComponent implements OnInit {
  festival: { festival: FestivalAPI }[] = [];

  constructor(
    private router: Router,
    private _ajoutPanierService: AjoutPanierService,
    private _enleverPanierService: EnleverPanierService,
    private _panierService: PanierService,
  ) {}

  ngOnInit(): void {
    this.festival = this._panierService.getFestivals();
  }

  enleverPanier(idPanier: number) {
    this._enleverPanierService.emitChange(idPanier);
    this.festival = this._panierService.getFestivals();
  }

  enleverQuantite(element: FestivalAPI) {
    if (element.quantitePanier > 1) {
      this.festival?.forEach((value, index) => {
        if (value.festival.idPanier === element.idPanier)
          this.festival[index].festival.quantitePanier--;
      });
    }
  }

  ajouterQuantite(element: FestivalAPI) {
    this.festival?.forEach((value, index) => {
      if (value.festival.idPanier === element.idPanier)
        this.festival[index].festival.quantitePanier++;
    });
  }

  get sum() {
    let sum = 0;
    this.festival.forEach((p, index) => {
      sum += p.festival.prixPass * p.festival.quantitePanier;
    });
    return sum;
  }
}
