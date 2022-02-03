import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FestivalComponent } from './pages/festival.component';
import { FestivalListComponent } from './pages/listFestival/list.component';
import { FestivalFormComponent } from './pages/formFestival/form.component';
import { PanierFormComponent } from './pages/panier/panier.component';
import { DescriptionFestivalComponent } from './pages/descriptionFestival/descriptionFestival.component';
import { EtablissementListComponent } from './pages/listEtablissement/list.component';
import { SelectionHotelComponent } from './pages/selectionHotel/selectionHotelcomponent';

const routes: Routes = [
  {
    path: '',
    component: FestivalComponent,
    children: [
      { path: 'listeFestival', component: FestivalListComponent },
      { path: 'listeEtablissement/:id', component: EtablissementListComponent },
      { path: 'formFestival', component: FestivalFormComponent },
      { path: 'panier', component: PanierFormComponent },
      { path: 'festival/:id', component: DescriptionFestivalComponent },
      { path: 'hotel/:nomCommercial/:id', component: SelectionHotelComponent },
      { path: '**', redirectTo: 'listeFestival' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
