import { Component, OnInit } from '@angular/core';

import { DonationsapiservicesService } from '../service/donationsapiservices.service'

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent implements OnInit {

  constructor(private _service:DonationsapiservicesService) { }

  charitiesDisplay: any = [];

  ngOnInit(): void {

    this._service.charitiesProps().subscribe((data)=>{

      console.log(data);
      this.charitiesDisplay = data

    });


    // this.getData();

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
