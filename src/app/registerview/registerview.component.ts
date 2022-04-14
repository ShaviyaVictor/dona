import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { UserRegisterService } from '../service/user-register.service';

@Component({
  selector: 'app-registerview',
  templateUrl: './registerview.component.html',
  styleUrls: ['./registerview.component.css']
})
export class RegisterviewComponent implements OnInit {


  register:any;

  constructor(private _service:UserRegisterService, private _route:Router) { }

  ngOnInit(): void {

    this.register = {

      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
      password: '',
      password1: '',
      is_admin:false,
      is_donor:false,
      is_charity:false,

    };

  }

  registration(){

    this._service.registeredProps(this.register).subscribe((userData:any)=>{
console.log("Details",userData);
console.log("Details",this.register.is_donor);

      alert('User ' + this.register.user_name + ' has been created successfully.')
    },
    error => console.log('error', error)
    );

  }

  loginRedirect(pageName:string) {
    this._route.navigate([`${pageName}`]);
  }

}