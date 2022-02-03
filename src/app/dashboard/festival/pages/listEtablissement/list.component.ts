import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelAPI } from '../../../../core/model/api/hotel';
import { HotelService } from '../../../../core/services/hotel.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EtablissementListComponent implements OnInit {
  id: any;
  breakpoint: any;
  hotels$: Observable<HotelAPI[]> = new Observable<HotelAPI[]>();

  constructor(private route: ActivatedRoute, private hotelSrv: HotelService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.hotels$ = this.hotelSrv.listByFestivalId(this.id);

    if (window.innerWidth > 1870) this.breakpoint = 3;
    else if (window.innerWidth < 1280) this.breakpoint = 1;
    else this.breakpoint = 2;
  }

  onResize(event: any) {
    if (window.innerWidth > 1870) this.breakpoint = 3;
    else if (window.innerWidth < 1280) this.breakpoint = 1;
    else this.breakpoint = 2;
  }
}
