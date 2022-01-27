import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AjoutPanierService } from '../../../../core/services/ajout-panier.service';
import { FestivalAPI } from '../../../../core/model/api/festival';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FestivalListComponent implements OnInit {
  breakpoint: any;

  festivals: FestivalAPI[] = [
    {
      id: 1,
      nom: 'gararock',
      ville: 'Grenoble (38000)',
      img: '',
      prix: '40€',
      idPanier: 0,
      quantitePanier: 1,
    },
    {
      id: 2,
      nom: 'test',
      ville: 'Lyon (69000)',
      img: '',
      prix: '20€',
      idPanier: 0,
      quantitePanier: 1,
    },
    {
      id: 3,
      nom: 'test',
      ville: 'Annonay (07100)',
      img: '',
      prix: '10€',
      idPanier: 0,
      quantitePanier: 1,
    },
    {
      id: 4,
      nom: 'test4',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '60€',
      idPanier: 0,
      quantitePanier: 1,
    },
    {
      id: 5,
      nom: 'menfou',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '70€',
      idPanier: 0,
      quantitePanier: 1,
    },
    {
      id: 6,
      nom: 'ok',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '110€',
      idPanier: 0,
      quantitePanier: 1,
    },
    {
      id: 7,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '10€',
      idPanier: 0,
      quantitePanier: 1,
    },
    {
      id: 8,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '10€',
      idPanier: 0,
      quantitePanier: 1,
    },
    {
      id: 9,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '10€',
      idPanier: 0,
      quantitePanier: 1,
    },
    {
      id: 10,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '10€',
      idPanier: 0,
      quantitePanier: 1,
    },
    {
      id: 11,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '10€',
      idPanier: 0,
      quantitePanier: 1,
    },
    {
      id: 11,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz (07340)',
      img: '',
      prix: '10€',
      idPanier: 0,
      quantitePanier: 1,
    },
  ];

  constructor(private _sharedService: AjoutPanierService) {}

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
