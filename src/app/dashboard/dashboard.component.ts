import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import ticketIcon from '@iconify/icons-ph/ticket';
import userIcon from '@iconify/icons-ph/user';
import houseIcon from '@iconify/icons-ph/house';
import shoppingartIcon from '@iconify/icons-ph/shopping-cart';
import { Router } from '@angular/router';
import { ClickService } from '../core/services/click.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy {
  @ViewChild('dropdownBtn') dropdownBtn!: ElementRef;
  @ViewChild('dropdownDiv') dropdownDiv!: ElementRef;

  readonly clickObs = this.clickSrv.onClick$.subscribe((e) => {
    // When user clicks outside of dropdownDiv and not on the button to toggle dropdown
    if (
      this.userDropdownOpened &&
      !this.dropdownBtn.nativeElement.contains(e.target) &&
      !this.dropdownDiv.nativeElement.contains(e.target)
    ) {
      this.userDropdownOpened = false;
    }
  });

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
  shoppingCartDropdownOpened = false;

  constructor(iconSrv: IconService, private router: Router, private clickSrv: ClickService) {
    iconSrv.registerAll({
      user: userIcon,
      shoppingCart: shoppingartIcon,
    });
  }

  toggleDropdown(v?: boolean) {
    console.log('It works');
    this.userDropdownOpened = v ?? !this.userDropdownOpened;
  }

  ngOnDestroy() {
    this.clickObs.unsubscribe();
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

  allerAuPanier() {
    this.router.navigateByUrl('/festival/panier');
    this.shoppingCartDropdownOpened = false;
  }
}
