import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

// configuración del locale de la app
import localeEsCL from '@angular/common/locales/es-CL'
import localeFrCa from '@angular/common/locales/fr-CA'
import {registerLocaleData} from '@angular/common';
import { LayoutPageComponent } from './layout-page/layout-page.component'
registerLocaleData(localeEsCL)
registerLocaleData(localeFrCa)

@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule
  ],
  providers: [
    // {provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
