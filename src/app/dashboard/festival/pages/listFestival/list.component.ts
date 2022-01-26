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
      nom: 'gararock',
      ville: 'Grenoble',
      img: '',
      prix: '40€',
    },
    {
      nom: 'test',
      ville: 'Lyon',
      img: '',
      prix: '20€',
    },
    {
      nom: 'test',
      ville: 'Annonay',
      img: '',
      prix: '10€',
    },
    {
      nom: 'test4',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '60€',
    },
    {
      nom: 'menfou',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '70€',
    },
    {
      nom: 'ok',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '110€',
    },
    {
      nom: 'c bien',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '10€',
    },
    {
      nom: 'c bien',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '10€',
    },
    {
      nom: 'c bien',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '10€',
    },
    {
      nom: 'c bien',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '10€',
    },
    {
      nom: 'c bien',
      ville: 'st etienne de valoux rpz',
      img: '',
      prix: '10€',
    },
    {
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
