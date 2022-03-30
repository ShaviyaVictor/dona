import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginviewComponent } from './loginview/loginview.component';
import { RegisterviewComponent } from './registerview/registerview.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { DonationviewComponent } from './donationview/donationview.component';
import { WorkviewComponent } from './workview/workview.component';
import { AboutviewComponent } from './aboutview/aboutview.component';
import { PaymentviewComponent } from './paymentview/paymentview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginviewComponent,
    RegisterviewComponent,
    HomeviewComponent,
    DonationviewComponent,
    WorkviewComponent,
    AboutviewComponent,
    PaymentviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
