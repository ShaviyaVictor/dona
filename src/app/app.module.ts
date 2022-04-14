import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginviewComponent } from './loginview/loginview.component';
import { RegisterviewComponent } from './registerview/registerview.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { DonationviewComponent } from './donationview/donationview.component';
import { WorkviewComponent } from './workview/workview.component';
import { AboutviewComponent } from './aboutview/aboutview.component';
import { PaymentviewComponent } from './paymentview/paymentview.component';
import { UserRegisterService } from './service/user-register.service';
import { DonationsapiservicesService } from './service/donationsapiservices.service';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginviewComponent,
    RegisterviewComponent,
    HomeviewComponent,
    DonationviewComponent,
    WorkviewComponent,
    AboutviewComponent,
    PaymentviewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DonationsapiservicesService,
    UserRegisterService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
