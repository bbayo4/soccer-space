import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { appInitializerProviders } from '@core/initializers';
import { httpInterceptorProviders } from '@core/interceptors';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    HttpClient,
    httpInterceptorProviders,
    appInitializerProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
