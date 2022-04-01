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

    this._service.registeredProps(this.register).subscribe((userData)=>{
      alert('User ' + this.register.user_name + ' has been created successfully.')
    },
    error => console.log('error', error)
    );

  }

}