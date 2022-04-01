import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private _http:HttpClient) { }


  userUrl = 'https://donationapp254.herokuapp.com/api/users/';

  registeredProps(userData:any):Observable<any> {
    return this._http.post(this.userUrl, userData);
  }

}
