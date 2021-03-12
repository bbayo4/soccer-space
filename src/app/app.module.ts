import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './core/interceptors/http.token.interceptor';
// import { HttpErrorInterceptor } from './core/interceptors/error-handler.interceptor';
import { SharedModule } from './shared/shared.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { TeamDetailsModule } from './modules/team-details/team-details.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTransferService } from './core/services/data-transfer.service';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './core/header/header.component';
// import { TeamsComponent } from './modules/teams/teams.component';
// import { DashboardComponent } from './modules/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeamDetailsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    DataTransferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
