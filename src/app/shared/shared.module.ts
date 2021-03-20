import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { NgProgressModule } from 'ngx-progressbar';

import { LayoutComponent } from './layout/layout.component';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { UserPanelComponent } from '../components/sidebar/user-panel.component';
import { SidemenuComponent } from '../components/sidemenu/sidemenu.component';
import { AccordionDirective } from '../components/sidemenu/accordion.directive';
import { AccordionItemDirective } from '../components/sidemenu/accordionItem.directive';
import { AccordionAnchorDirective } from '../components/sidemenu/accordionanchor.directive';
import { SidebarNoticeComponent } from '../components/sidebar-notice/sidebar-notice.component';
import { UserComponent } from '../components/header/widgets/user.component';

import { HeaderComponent } from '../components/header/header.component';
import { BrandingComponent } from '../components/header/widgets/branding.component';
import { GithubButtonComponent } from '../components/header/widgets/github.component';
import { NotificationComponent } from '../components/header/widgets/notification.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

const MODULES = [
  MaterialModule,
  FlexLayoutModule,
  TranslateModule,
  NgProgressModule
];
const COMPONENTS = [
  LayoutComponent,
  AdminLayoutComponent,
  BreadcrumbComponent,
  SidebarComponent,
  UserPanelComponent,
  SidemenuComponent,
  AccordionDirective,
  AccordionItemDirective,
  AccordionAnchorDirective,
  SidebarNoticeComponent,
  HeaderComponent,
  BrandingComponent,
  GithubButtonComponent,
  NotificationComponent,
  UserComponent
];
const COMPONENTS_DYNAMIC = [];
const DIRECTIVES = [];
const PIPES = [];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ...DIRECTIVES, ...PIPES],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...MODULES],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class SharedModule {}
