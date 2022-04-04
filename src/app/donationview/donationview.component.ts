import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { DonationsapiservicesService } from '../service/donationsapiservices.service';

@Component({
  selector: 'app-donationview',
  templateUrl: './donationview.component.html',
  styleUrls: ['./donationview.component.css']
})
export class DonationviewComponent implements OnInit {

  getValue(val:string) {
    console.warn(val)
  }

  constructor(private _service:DonationsapiservicesService, private _route:ActivatedRoute) { }

  charityDisplayed: any = [];

  ngOnInit(): void {

    this._service.charityProp().subscribe((data)=>{

      console.log(data);
      this.charityDisplayed = data

      console.log(this._route.snapshot.params['id']);
      
    });

  }


}
