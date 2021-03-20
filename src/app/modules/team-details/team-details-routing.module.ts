import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LayoutComponent } from '../../shared/layout/layout.component';
import { AdminLayoutComponent } from '../../shared/layout/admin-layout.component';
import { TeamDetailsComponent } from './team-details-home/team-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: TeamDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamDetailsRoutingModule { }
