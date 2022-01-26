import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

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
      ville: 'Grenoble',
      img: '',
      prix: '40€',
    },
    {
      id: 2,
      nom: 'test',
      ville: 'Lyon',
      img: '',
      prix: '20€',
    },
    {
      id: 3,
      nom: 'test',
      ville: 'Annonay',
      img: '',
      prix: '10€',
    },
    {
      id: 4,
      nom: 'test4',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '60€',
    },
    {
      id: 5,
      nom: 'menfou',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '70€',
    },
    {
      id: 6,
      nom: 'ok',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '110€',
    },
    {
      id: 7,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '10€',
    },
    {
      id: 8,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '10€',
    },
    {
      id: 9,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '10€',
    },
    {
      id: 10,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '10€',
    },
    {
      id: 11,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '10€',
    },
    {
      id: 11,
      nom: 'c bien',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '10€',
    },
  ];

  ngOnInit() {
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
