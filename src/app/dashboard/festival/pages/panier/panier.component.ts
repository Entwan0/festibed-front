import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list-item,[ticket]',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanierFormComponent {
  constructor(private router: Router) {}
}
