import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LayoutComponent } from '../../shared/layout/layout.component';
import { AdminLayoutComponent } from '../../shared/layout/admin-layout.component';
import { TablesComponent } from './tables-home/tables.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: TablesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
