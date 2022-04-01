import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerview',
  templateUrl: './registerview.component.html',
  styleUrls: ['./registerview.component.css']
})
export class RegisterviewComponent implements OnInit {

  register:any;

  constructor() { }

  ngOnInit(): void {

    this.register = {

      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
      password: '',

    };

  }

}
