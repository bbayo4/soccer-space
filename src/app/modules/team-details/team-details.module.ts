import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { TeamDetailsComponent } from './team-details.component';
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
  ],
  providers: [],
  exports: [
    TeamDetailsComponent
  ],
})
export class TeamDetailsModule { }

