import { Component, OnInit } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import ticketIcon from '@iconify/icons-ph/ticket';
import userIcon from '@iconify/icons-ph/user';
import houseIcon from '@iconify/icons-ph/house';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  readonly sidebarItems = [
    {
      icon: ticketIcon,
      title: 'Festivals',
      url: '/festival/listeFestival',
    },
    {
      icon: houseIcon,
      title: 'Logements',
      url: '/festival/listeLogement',
    },
  ];

  sidebarOpen = false;


  username: string | undefined = '';

  userDropdownOpened = false;

  constructor(iconSrv: IconService, private router: Router) {
    iconSrv.registerAll({
      user: userIcon,
    });
  }

  logout() {
    this.router.navigateByUrl('/login');
  }
}
