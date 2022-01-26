import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import {SharedService} from "../../../../core/services/SharedService";

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FestivalListComponent implements OnInit {
  breakpoint: any;

  festivals = [
    {
      id: 1,
      nom: 'gararock',
      ville: 'Grenoble (38000)',
      img: '',
      prix: '40€',
    },
    {
      id: 2,
      nom: 'test',
      ville: 'Lyon (69000)',
      img: '',
      prix: '20€',
    },
    {
      id: 3,
      nom: 'test',
      ville: 'Annonay (07100)',
      img: '',
      prix: '10€',
    },
    {
      id: 4,
      nom: 'test4',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '60€',
    },
    {
      id: 5,
      nom: 'menfou',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '70€',
    },
    {
      id: 6,
      nom: 'ok',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '110€',
    },
    {
      id: 7,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '10€',
    },
    {
      id: 8,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '10€',
    },
    {
      id: 9,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '10€',
    },
    {
      id: 10,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '10€',
    },
    {
      id: 11,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '10€',
    },
    {
      id: 11,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '10€',
    },
  ];

  constructor(private _sharedService: SharedService) {}

  ngOnInit() {
    if (window.innerWidth > 1870) this.breakpoint = 3;
    else if (window.innerWidth < 1280) this.breakpoint = 1;
    else this.breakpoint = 2;
  }

  addPanier() {
    console.log('ca part');
    this._sharedService.emitChange('data from child');
  }

  onResize(event: any) {
    if (window.innerWidth > 1870) this.breakpoint = 3;
    else if (window.innerWidth < 1280) this.breakpoint = 1;
    else this.breakpoint = 2;
  }
}
