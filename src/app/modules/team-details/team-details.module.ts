import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
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
    SharedModule,
    TeamDetailsRoutingModule
  ],
  providers: [],
  exports: [
    TeamDetailsComponent
  ],
})
export class TeamDetailsModule { }

