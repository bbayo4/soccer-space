import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { TablesModule } from '../tables/tables.module';

import { ScoresRoutingModule } from './scores-routing.module';
import { ScoresComponent } from './scores-home/scores.component';
import { ScoreCardComponent } from './scores-home/score-card/score-card.component';

@NgModule({
  declarations: [ScoresComponent, ScoreCardComponent],
  imports: [
    CommonModule,
    ScoresRoutingModule,
    SharedModule,
    TablesModule
  ],
  entryComponents: []
})
export class ScoresModule { }
