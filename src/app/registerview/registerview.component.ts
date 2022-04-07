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

  // registerForm = new FormGroup({

  //   firstN: new FormControl(''),
  //   lastN: new FormControl(''),
  //   userN: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   password2: new FormControl(''),

  // });

  // registerUser() {
  //   console.warn(this.registerForm)
  // }

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

    };

  }

  registration(){

    this._service.registeredProps(this.register).subscribe((userData)=>{
      // alert('User ' + this.register.user_name + ' has been created successfully.')
    },
    // error => console.log('error', error)
    );

  }

  loginRedirect(pageName:string) {
    this._route.navigate([`${pageName}`]);
  }

}