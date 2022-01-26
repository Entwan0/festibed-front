import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './descriptionFestival.component.html',
  styleUrls: ['./descriptionFestival.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionFestivalComponent implements OnInit {
  id: number | string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? 'new');
  }
}
