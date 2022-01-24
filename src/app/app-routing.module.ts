import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    canActivate: [],
    children: [
      {
        path: 'festival',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
      },
      { path: '**', redirectTo: '/login' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
