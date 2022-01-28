import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AjoutPanierService } from '../../../../core/services/ajout-panier.service';
import { FestivalAPI } from '../../../../core/model/api/festival';
import { FestivalService } from '../../../../core/services/festival.service';
import { shareReplay } from 'rxjs';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FestivalListComponent implements OnInit {
  breakpoint: any;

  readonly festivals$ = this._festivalService.list().pipe(shareReplay());

  constructor(
    private _sharedService: AjoutPanierService,
    private _festivalService: FestivalService,
  ) {}

  ngOnInit() {
    if (window.innerWidth > 1870) this.breakpoint = 3;
    else if (window.innerWidth < 1280) this.breakpoint = 1;
    else this.breakpoint = 2;
  }

  addPanier(element: FestivalAPI) {
    console.log('ca part');
    this._sharedService.emitChange(element);
  }

  onResize(event: any) {
    if (window.innerWidth > 1870) this.breakpoint = 3;
    else if (window.innerWidth < 1280) this.breakpoint = 1;
    else this.breakpoint = 2;
  }
}
