import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import ticketIcon from '@iconify/icons-ph/ticket';
import userIcon from '@iconify/icons-ph/user';
import houseIcon from '@iconify/icons-ph/house';
import shoppingartIcon from '@iconify/icons-ph/shopping-cart';
import { ActivatedRoute, Router } from '@angular/router';
import { ClickService } from '../core/services/click.service';
import { FestivalListComponent } from './festival/pages/listFestival/list.component';
import { SharedService } from '../core/services/SharedService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [SharedService],
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
  nbElementPanier: number = 0;

  constructor(
    iconSrv: IconService,
    private router: Router,
    private clickSrv: ClickService,
    private route: ActivatedRoute,
    private _sharedService: SharedService,
  ) {
    iconSrv.registerAll({
      user: userIcon,
      shoppingCart: shoppingartIcon,
    });
    _sharedService.changeEmitted$.subscribe((text) => {
      console.log(text);
      this.ajoutPanier();
    });
  }

  toggleDropdown(v?: boolean) {
    console.log('It works');
    this.userDropdownOpened = v ?? !this.userDropdownOpened;
  }

  ngOnDestroy() {
    this.clickObs.unsubscribe();
  }

  ajoutPanier() {
    this.nbElementPanier++;
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

  allerAuPanier() {
    this.router.navigateByUrl('/festival/panier');
    this.shoppingCartDropdownOpened = false;
  }
}
