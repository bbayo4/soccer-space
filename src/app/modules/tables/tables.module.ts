import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables-home/tables.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [TablesComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule,
  ],
  exports: [TablesComponent]
})
export class TablesModule { }
