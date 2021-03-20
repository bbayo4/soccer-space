import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LayoutComponent } from '../../shared/layout/layout.component';
import { AdminLayoutComponent } from '../../shared/layout/admin-layout.component';
import { ScoresComponent } from './scores-home/scores.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: ScoresComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoresRoutingModule { }
