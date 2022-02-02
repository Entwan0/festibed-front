import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelAPI } from '../../../../core/model/api/hotel';
import { HotelService } from '../../../../core/services/hotel.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';

@Component({
  templateUrl: './selectionHotel.component.html',
  styleUrls: ['./selectionHotel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionHotelComponent implements OnInit {
  hotels$: Observable<HotelAPI[]> = new Observable<HotelAPI[]>();

  nombrePass: number = 0;

  estChoisitNbrPass: boolean = false;

  readonly testForm = new FormGroup({
    nombrePass: new FormControl(null),
    nombreChambreSimple: new FormControl(null),
    nombreChambreDouble: new FormControl(null),
    nombreChambreFamilial: new FormControl(null),
  });

  constructor(
    private route: ActivatedRoute,
    private hotelSrv: HotelService,
    private readonly notifSrv: TuiNotificationsService,
  ) {}

  ngOnInit() {
    const nomCommercial = this.route.snapshot.paramMap.get('nomCommercial') ?? 'new';

    this.hotels$ = this.hotelSrv.getOne(nomCommercial);
  }

  choisitNombrePass() {
    if (this.testForm.get('nombrePass')?.value > 0) {
      this.estChoisitNbrPass = true;
    }
  }

  ajouterPanier() {
    const val =
      Number(this.testForm.get('nombreChambreSimple')?.value) +
      Number(this.testForm.get('nombreChambreDouble')?.value * 2) +
      Number(this.testForm.get('nombreChambreFamilial')?.value * 4);

    console.log(val);

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
      //this.router.navigateByUrl('/festival/listeFestival');
    }
  }
}
