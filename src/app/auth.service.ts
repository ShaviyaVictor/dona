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


  constructor( private http:HttpClient) { }

  LoginUser(userData:any):Observable<any>{
    return this.http.post(this.api_url+ 'api-token-auth/',userData)
  }


  
}
