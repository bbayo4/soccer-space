import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { TablesModule } from '../tables/tables.module';

import { TeamDetailsRoutingModule } from './team-details-routing.module';
import { TeamDetailsComponent } from './team-details-home/team-details.component';
import { PlayersComponent } from '../players/players.component';



@NgModule({
  declarations: [
    TeamDetailsComponent,
    PlayersComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TeamDetailsRoutingModule,
    SharedModule,
    TablesModule
  ],
  providers: [],
  exports: [
    TeamDetailsComponent
  ],
})
export class TeamDetailsModule { }

