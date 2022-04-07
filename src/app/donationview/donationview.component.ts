import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router'

import { DonationsapiservicesService } from '../service/donationsapiservices.service';
// import { render } from 'creditcardpayments/creditCardPayments';

declare let paypal:any;

@Component({
  selector: 'app-donationview',
  templateUrl: './donationview.component.html',
  styleUrls: ['./donationview.component.css']
})
export class DonationviewComponent implements OnInit, AfterViewChecked {


  // Start of express paypal checkout

  addScript: boolean = false;

  paypalLoad: boolean = false;

  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'Afo5RMkBP32MD2WUSbevl2z_m-1PbLtxGXDaPcWFceaPHq_JC70Kso5XScxLbUI71xO54FGJs2Ou1-ZQ',
    },
    commit: true,
    payment: (data:any, actions:any) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },

    onAuthorize: (data:any, actions:any) => {
      return actions.payment.execute().then((payment:any) => {
        // Do something
        alert('Transaction successful!')
      })
    }

  };

  ngAfterViewChecked(): void {
    if(!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#myPaypalButtons');
        this.paypalLoad = true;
      })
    }
  }

  

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scriptTagElement = document.createElement('script');
      scriptTagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    })
  }





  // End of express paypal checkout

  // Getting the data from the form inputs

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

  // End of getting the form inputs data

  constructor(private _service:DonationsapiservicesService, private _route:ActivatedRoute, private route:Router) { 
    // render(
    //  { 
    //   id: '#myPaypalButtons',
    //   currency: 'USD',
    //   value: '200',
    //   onApprove: (details) => {
    //     alert('Transaction successful');
    //   }       
    //   }
    // )
  }

  charityDisplayed: Array<any> = [];
  charity: any;

  ngOnInit(): void {

    // this._service.charityProp().subscribe((data)=>{

    //   console.log(data);
    //   this.charityDisplayed = data

    //   console.log(this._route.snapshot.params['id']);
      
    // });


    // this.getData();


    let id = 0;

    this._route.paramMap.subscribe(( data:any ) => {
      // console.log('Data received is');
      id = data.params.id
    

    this._service.charitiesProps().subscribe((data)=>{

      this.charityDisplayed = data
      this.charityDisplayed = this.charityDisplayed.filter((data :any) => data.id == id);

      if(this.charityDisplayed.length <= 0) {
        this.route.navigateByUrl('');
      }

      this.charity = this.charityDisplayed[0];

      console.log(this.charity)

      // console.log(data);
      // this.charitiesDisplay = data

    });

  })

  }

  // public id = '';
  // public charity: any;
  // public location: any;
  // public charity_image: any;

  // charities!: any[]

  // getData() {
  //   return this._service.getCharity(this.id).subscribe(data => {
  //     console.log(data)
  //     this.location = data.location
  //   })
  // }


}


