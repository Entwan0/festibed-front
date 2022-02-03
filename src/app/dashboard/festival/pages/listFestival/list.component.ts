import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AjoutPanierService } from '../../../../core/services/ajout-panier.service';
import { FestivalAPI } from '../../../../core/model/api/festival';
import { FestivalService } from '../../../../core/services/festival.service';
import { Observable, shareReplay } from 'rxjs';
import {FestivalIdService} from "../../../../core/services/festivalIdService";
import {HotelAPI} from "../../../../core/model/api/hotel";

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [FestivalIdService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FestivalListComponent implements OnInit {
  breakpoint: any;

  festivals$: Observable<{ content: FestivalAPI[]; totalPages: number }> = this._festivalService
    .list(0)
    .pipe(shareReplay());

  activePadding = 2;
  valuePadding = 0;
  lengthPadding: any = 1;

  constructor(
    private _ajoutPanierService: AjoutPanierService,
    private _festivalService: FestivalService,
    private _festivalIdSrv: FestivalIdService,
  ) {}

  ngOnInit() {
    if (window.innerWidth > 1870) this.breakpoint = 3;
    else if (window.innerWidth < 1280) this.breakpoint = 1;
    else this.breakpoint = 2;
    this.festivals$.subscribe((fest) => {
      this.lengthPadding = fest.totalPages;
    });
  }

  onResize(event: any) {
    if (window.innerWidth > 1870) this.breakpoint = 3;
    else if (window.innerWidth < 1280) this.breakpoint = 1;
    else this.breakpoint = 2;
  }

  search(city: string) {
    if (city === null || city === '' || city === undefined) {
      this.festivals$ = this._festivalService.list(0).pipe(shareReplay());
    } else this.festivals$ = this._festivalService.getByCity(city).pipe(shareReplay());
  }

  valuePaddingChange() {
    this.festivals$ = this._festivalService.list(this.valuePadding).pipe(shareReplay());
  }
}
