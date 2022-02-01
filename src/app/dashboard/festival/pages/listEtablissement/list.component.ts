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
  hotels$: Observable<HotelAPI[]> = new Observable<HotelAPI[]>();

  constructor(private route: ActivatedRoute, private hotelSrv: HotelService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.hotels$ = this.hotelSrv.listByFestivalId(id);
  }
}
