import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { HttpClientModule } from "@angular/common/http";
import { ElementGetterService } from "./element-getter.service";
import { AtomicBannerComponent } from './atomic-banner/atomic-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    PeriodicTableComponent,
    AtomicBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ElementGetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
