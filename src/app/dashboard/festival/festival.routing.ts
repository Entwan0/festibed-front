import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FestivalComponent } from './pages/festival.component';
import { FestivalListComponent } from './pages/listFestival/list.component';
import { LogementListComponent } from './pages/listLogement/list.component';
import { FestivalFormComponent } from './pages/formFestival/form.component';
import { PanierFormComponent } from './pages/panier/panier.component';

const routes: Routes = [
  {
    path: '',
    component: FestivalComponent,
    children: [
      { path: 'listeFestival', component: FestivalListComponent },
      { path: 'listeLogement', component: LogementListComponent },
      { path: 'formFestival', component: FestivalFormComponent },
      { path: 'panier', component: PanierFormComponent },
      { path: '**', redirectTo: '/' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
