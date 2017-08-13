import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { MembershipFunctionComponent } from './chart/membership-function/membership-function.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    MembershipFunctionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
