import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import ticketIcon from '@iconify/icons-ph/ticket';
import userIcon from '@iconify/icons-ph/user';
import houseIcon from '@iconify/icons-ph/house';
import shoppingartIcon from '@iconify/icons-ph/shopping-cart';
import { ActivatedRoute, Router } from '@angular/router';
import { ClickService } from '../core/services/click.service';
import { AjoutPanierService } from '../core/services/ajout-panier.service';
import { PanierService } from '../core/services/panierService';
import { FestivalAPI } from '../core/model/api/festival';
import { EnleverPanierService } from '../core/services/enlever-panier.service';
import { FacebookAuthService } from '../core/services/facebook-auth.service';
import firebase from 'firebase/compat/app';
import { ChambreAPI } from '../core/model/api/chambre';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [AjoutPanierService, PanierService, EnleverPanierService],
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

  user!: firebase.User | null;

  userDropdownOpened = false;
  shoppingCartDropdownOpened = false;

  idPanier = 0;
  panier: {
    dateReservation: Date;
    montant: number;
    nombrePass: number;
    festival: FestivalAPI;
    nomHotel: string;
    nbrChambreSimple: number;
    nbrChambreDouble: number;
    nbrChambreFamilial: number;
  }[] = [];

  constructor(
    iconSrv: IconService,
    private router: Router,
    private clickSrv: ClickService,
    private route: ActivatedRoute,
    private _ajoutPanierService: AjoutPanierService,
    private _enleverPanierService: EnleverPanierService,
    private _panierService: PanierService,
    public authService: FacebookAuthService,
  ) {
    iconSrv.registerAll({
      user: userIcon,
      shoppingCart: shoppingartIcon,
    });
    _ajoutPanierService.changeEmitted$.subscribe((text) => {
      const newProduct = JSON.parse(JSON.stringify(text));
      newProduct.festival.idPanier = this.idPanier;
      newProduct.festival.quantitePanier = 1;
      this.idPanier++;
      this.panier.push(newProduct);
      this._panierService.setFestival(this.panier);
    });
    _enleverPanierService.changeEmitted$.subscribe((idPanier) => {
      this.panier.forEach((value, index) => {
        if (value.festival.idPanier === idPanier) this.panier.splice(index, 1);
      });
      this._panierService.setFestival(this.panier);
    });
    this.user = this.authService.user;
  }

  toggleDropdown(v?: boolean) {
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
