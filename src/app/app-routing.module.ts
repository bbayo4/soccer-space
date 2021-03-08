import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './modules/teams/teams.component';

// import { PlayersComponent } from './modules/players/players.component';
import { TeamDetailsComponent } from './modules/team-details/team-details.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:id', component: TeamDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
