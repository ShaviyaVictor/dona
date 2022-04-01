import { Component, OnInit } from '@angular/core';

import { DonationsapiservicesService } from '../service/donationsapiservices.service'

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent implements OnInit {

  // Dummy data
  charities = [

    {
      location: 'Mother of Hope Foundation',
      image: '../../assets/Image-2.jpg'
    },
    {
      location: 'Okoa Toto Foundation',
      image: '../../assets/Image-3.jpg'
    },
    {
      location: 'Lea Dada Foundation',
      image: '../../assets/Image-4.jpg'
    },
    {
      location: 'Nairobi',
      image: '../../assets/Image-5.jpg'
    },
    {
      location: 'All for One',
      image: '../../assets/Image-6.jpg'
    },
    {
      location: 'Kisumu',
      image: '../../assets/Image-7.jpg'
    },

  ]

  constructor(private _service:DonationsapiservicesService) { }

  charitiesDisplay: any = [];

  ngOnInit(): void {

    this._service.charitiesProps().subscribe((data)=>{

      console.log(data);
      this.charitiesDisplay = data

    });

  }

}
