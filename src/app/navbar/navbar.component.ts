import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserTokenService } from '../user-token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private roles: string[] = [];

  isLoggedIn = false;
  isLoggedOut = true;
  admin_role!:boolean;
  donar_role!:boolean;
  charity_role!:boolean;
  username?: string;

  user:any;
  constructor(private authService:AuthService,private router:Router,private usertoken: UserTokenService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.usertoken.getToken();

    if (this.isLoggedIn) {
      const user = this.usertoken.getUser();
      this.roles = user.roles;
      this.isLoggedOut = false;
      this.username = user.username;
      this.admin_role = user.is_admin;
      this.donar_role = user.is_donor;
      this.charity_role = user.is_charity;
      
    }
  }
  
  logout(): void {
    this.usertoken.signOut();
    window.location.reload();
    
  }


}
