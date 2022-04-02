import { Component, OnInit } from '@angular/core';

import { DonationsapiservicesService } from '../service/donationsapiservices.service'

@Component({
  selector: 'app-donationview',
  templateUrl: './donationview.component.html',
  styleUrls: ['./donationview.component.css']
})
export class DonationviewComponent implements OnInit {

  constructor(private _service:DonationsapiservicesService) { }

  charityDisplayed: any = [];

  ngOnInit(): void {

    this._service.charityProp().subscribe((data)=>{

      console.log(data);
      this.charityDisplayed = data
      
    });

  }

}
