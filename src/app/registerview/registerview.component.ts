import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../service/user-register.service'

@Component({
  selector: 'app-registerview',
  templateUrl: './registerview.component.html',
  styleUrls: ['./registerview.component.css']
})
export class RegisterviewComponent implements OnInit {

  register:any;

  constructor(private _service:UserRegisterService) { }

  ngOnInit(): void {

    this.register = {

      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
      password: '',

    };

  }

  registration(){

    this._service

  }

}
