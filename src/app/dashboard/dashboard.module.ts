import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';

@NgModule({
  declarations: [],
  imports: [CommonModule, DashboardRoutingModule, TuiActiveZoneModule],
})
export class DashboardModule {}
