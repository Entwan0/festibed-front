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
      descripton: 'trop bien',
    },
    {
      nom: 'test',
      descripton: 'eheh',
    },
    {
      nom: 'test',
      descripton: 'when',
    },
    {
      nom: 'test4',
      descripton: 'tg',
    },
    {
      nom: 'menfou',
      descripton: 'when',
    },
    {
      nom: 'ok',
      descripton: 'when',
    },
    {
      nom: 'c bien',
      descripton: 'when',
    },
  ];

  ngOnInit() {
    if (window.innerWidth > 1300) this.breakpoint = 3;
    else if (window.innerWidth < 700) this.breakpoint = 1;
    else this.breakpoint = 2;
  }

  onResize(event: any) {
    if (window.innerWidth > 1300) this.breakpoint = 3;
    else if (window.innerWidth < 700) this.breakpoint = 1;
    else this.breakpoint = 2;
  }
}
