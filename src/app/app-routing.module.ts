import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutviewComponent } from './aboutview/aboutview.component';
import { DonationviewComponent } from './donationview/donationview.component';

import { HomeviewComponent } from './homeview/homeview.component';
import { LoginviewComponent } from './loginview/loginview.component'
import { PaymentviewComponent } from './paymentview/paymentview.component';
import { RegisterviewComponent } from './registerview/registerview.component'
import { WorkviewComponent } from './workview/workview.component';

const routes: Routes = [

  { path:'login', component:LoginviewComponent },
  { path:'register', component:RegisterviewComponent },
  { path:'', component:HomeviewComponent },
  { path:'donation', component:DonationviewComponent },
  { path:'work', component:WorkviewComponent },
  { path:'about', component:AboutviewComponent },
  { path:'payment', component:PaymentviewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
