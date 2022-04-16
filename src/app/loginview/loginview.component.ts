import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { first } from 'rxjs/operators';
import { UserTokenService } from '../user-token.service';

@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['./loginview.component.css']
})
export class LoginviewComponent implements OnInit {

  title = 'frontend';
  form:any = {
    username: '',
    password: ''
  };
  isLoggedIn = false;
  isLoginFailed = false;
 
  roles: string[] = [];

  admin_role!:boolean;
  donar_role!:boolean;
  charity_role!:boolean;
  email:any;

  specific_user:any;

      constructor(private authService:AuthService,private router:Router,private usertoken: UserTokenService) { }
      
      ngOnInit(): void {

      if (this.usertoken.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.usertoken.getUser().username;
        }

        this.authService.userDataDetails().subscribe((users:any)=>{
          this.specific_user=users
                    
        })

        
      }

      onSubmit(): void {
        const data = {
          username: this.form.username,
          password: this.form.password
        }

        this.authService.login2(data.username, data.password).pipe(first()).subscribe(
          (data:any) => {                
            this.usertoken.saveToken(data);
            this.usertoken.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.usertoken.getUser().username;
            this.email = this.usertoken.getUser().email;
            

            this.router.navigate(['']).then(() => {
              window.location.reload();
            })
            // this.reloadPage();

            
          },
          (error:any) => {
            this.isLoginFailed = true;
            alert("Incorrect username or password !!")
            console.log(error);
            
          }
        );
      }

      // homePgRedirect(pageName:string) {
      //   this.router.navigate([`${pageName}`])
      // }
      // (click)="homePgRedirect('')"
    
      reloadPage(): void {

        window.location.reload();
      }

  
}
