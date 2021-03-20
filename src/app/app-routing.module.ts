import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { title: 'Dashboard', titleI18n: 'dashboard' }
  },
  {
    path: 'teams',
    loadChildren: () => import('./modules/teams/teams.module').then(m => m.TeamsModule)
  },
  {
    path: 'teams/:id',
    loadChildren: () => import('./modules/team-details/team-details.module').then(m => m.TeamDetailsModule)
  },
  {
    path: 'scores',
    loadChildren: () => import('./modules/scores/scores.module').then(m => m.ScoresModule)
  },
  {
    path: 'tables',
    loadChildren: () => import('./modules/tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
