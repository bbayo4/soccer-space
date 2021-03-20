import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@shared/shared.module';
import { DashboardComponent } from './dashboard-home/dashboard.component';
import { CardModule } from '../../components/card/card.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    CardModule
  ],
  entryComponents: []
})
export class DashboardModule { }
