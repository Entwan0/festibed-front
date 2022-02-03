import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HotelAPI } from '../../../../core/model/api/hotel';
import { HotelService } from '../../../../core/services/hotel.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { ChambreService } from '../../../../core/services/chambre.service';
import { FestivalIdService } from '../../../../core/services/festivalIdService';
import { FestivalAPI } from '../../../../core/model/api/festival';
import { FestivalService } from '../../../../core/services/festival.service';
import { AjoutPanierService } from '../../../../core/services/ajout-panier.service';
import { ChambreAPI } from '../../../../core/model/api/chambre';

@Component({
  templateUrl: './selectionHotel.component.html',
  styleUrls: ['./selectionHotel.component.scss'],
  providers: [FestivalIdService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionHotelComponent implements OnInit {
  hotels$: Observable<HotelAPI[]> = new Observable<HotelAPI[]>();

  estChoisitNbrPass: boolean = false;

  private nomCommercial: string = '';

  private festivalId = this._festivalIdSrv.getFestivals();

  readonly testForm = new FormGroup({
    nombrePass: new FormControl(null),
    nombreChambreSimple: new FormControl(null),
    nombreChambreDouble: new FormControl(null),
    nombreChambreFamilial: new FormControl(null),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelSrv: HotelService,
    private chambreSrv: ChambreService,
    private _festivalIdSrv: FestivalIdService,
    private _festivalSrv: FestivalService,
    private _chambreSv: ChambreService,
    private _ajoutPanierService: AjoutPanierService,
    private readonly notifSrv: TuiNotificationsService,
  ) {}

  ngOnInit() {
    this.nomCommercial = this.route.snapshot.paramMap.get('nomCommercial') ?? 'new';
    this.festivalId = this.route.snapshot.paramMap.get('id') ?? 'new';

    this.hotels$ = this.hotelSrv.getOne(this.nomCommercial);
  }

  choisitNombrePass() {
    if (this.testForm.get('nombrePass')?.value > 0) {
      this.estChoisitNbrPass = true;
    }
  }

  choisir() {
    this._festivalSrv.getById(this.festivalId).subscribe((festival) => {
      let panierObject: {
        montant: number;
        nombrePass: number;
        festival: FestivalAPI;
        nomHotel: string;
        nbrChambreSimple: number;
        nbrChambreDouble: number;
        nbrChambreFamilial: number;
      } = {
        montant: festival.prixPass,
        nombrePass: this.testForm.get('nombrePass')?.value,
        festival: festival,
        nomHotel: this.nomCommercial,
        nbrChambreSimple: this.testForm.get('nombreChambreSimple')?.value,
        nbrChambreDouble: this.testForm.get('nombreChambreDouble')?.value,
        nbrChambreFamilial: this.testForm.get('nombreChambreFamilial')?.value,
      };
      if (panierObject.nbrChambreSimple === null) panierObject.nbrChambreSimple = 0;
      if (panierObject.nbrChambreDouble === null) panierObject.nbrChambreDouble = 0;
      if (panierObject.nbrChambreFamilial === null) panierObject.nbrChambreFamilial = 0;
      this._ajoutPanierService.emitChange(panierObject);
    });
  }

  ajouterPanier() {
    const val =
      Number(this.testForm.get('nombreChambreSimple')?.value) +
      Number(this.testForm.get('nombreChambreDouble')?.value * 2) +
      Number(this.testForm.get('nombreChambreFamilial')?.value * 4);

    if (val < this.testForm.get('nombrePass')?.value) {
      this.notifSrv
        .show(
          'Veuillez choisir plus de chambre. Vous demandez ' +
            this.testForm.get('nombrePass')?.value +
            ' pass. cependant les chambres selectionnees ont une capacité de ' +
            val +
            ' personnes.',
          {
            autoClose: 10000,
            label: 'Erreur nombre de chambre',
            status: TuiNotification.Warning,
          },
        )
        .subscribe();
      return;
    } else {
      this.choisir();
      this.router.navigateByUrl('/festival/listeFestival');
    }
  }
}
