import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['./loginview.component.css']
})
export class LoginviewComponent implements OnInit {

  title = 'frontend';
  input:any;
  myform!: FormGroup;
      constructor(private authService:AuthService,private router:Router) { }
      ngOnInit(): void {
        this.input={
          username:'',
          password:'',
        }
      }


      onLogin(){
        this.authService.LoginUser(this.input).subscribe(
          (response:any)=>{
        console.log(response);
            this.router.navigate(['/']);
          },
          (error:any)=>{

            alert('Incorrect Email Address or Password!!!')

            this.router.navigate(['login']);

          console.log('Main error:',error);

          }
        )
      }
 
 
 

}
