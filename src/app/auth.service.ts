import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url='http://donationapp254.herokuapp.com/';

  auth_api='https://donationapp254.herokuapp.com/api-auth';
  userUrl = 'https://donationapp254.herokuapp.com/api/users/';

  oneuser='https://donationapp254.herokuapp.com/api/users/user-id/12'


  constructor( private http:HttpClient) { }

  LoginDonarUser(userData:any):Observable<any>{

    console.log("My Data is ",userData);
    
    return this.http.post(this.api_url+ 'api-token-auth/',userData)
  }


  userDataDetails():Observable<any>{
  return this.http.get(this.oneuser)
}



  LoginCharityUser(userData:any):Observable<any>{

    console.log("My Name is ",userData);
    
    return this.http.post(this.api_url+ 'api-token-auth/',userData)
    
  }
 
login2(username: string, password: string): Observable<any> {

  return this.http.post(this.auth_api, {username, password}).pipe(
    map(user => {
      if(user){
        localStorage.setItem('CurrentUser', JSON.stringify(user))
      }
      return user;
    })
  );
}

  
}
