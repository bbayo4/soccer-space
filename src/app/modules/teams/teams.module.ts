import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams-home/teams.component';

import { SharedModule } from '@shared/shared.module';
import { CardModule } from '../../components/card/card.module';

@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule,
    CardModule
  ],
  entryComponents: []
})
export class TeamsModule { }
