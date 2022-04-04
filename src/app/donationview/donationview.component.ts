import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { DonationsapiservicesService } from '../service/donationsapiservices.service';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-donationview',
  templateUrl: './donationview.component.html',
  styleUrls: ['./donationview.component.css']
})
export class DonationviewComponent implements OnInit {

  displayVal1:string = '';
  getValue1(val:string) {
    console.warn(val)
    this.displayVal1 = val
  }

  displayVal2:string = '';
  getValue2(val:string) {
    console.warn(val)
    this.displayVal2 = val
  }

  constructor(private _service:DonationsapiservicesService, private _route:ActivatedRoute) { 
    render(
     { 
      id: '#myPaypalButtons',
      currency: 'USD',
      value: '100.00',
      onApprove: (details) => {
        alert('Transaction successfull');
      }       
      }
    )
  }

  charityDisplayed: any = [];

  ngOnInit(): void {

    this._service.charityProp().subscribe((data)=>{

      console.log(data);
      this.charityDisplayed = data

      console.log(this._route.snapshot.params['id']);
      
    });

  }


}
