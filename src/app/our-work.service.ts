import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Accept': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class OurWorkService {
  api_url='http://donationapp254.herokuapp.com/';


  constructor( private http:HttpClient) { }

  ourWork():Observable<any>{
    return this.http.get(this.api_url+ 'api/beneficiaries/')
    .pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addBeneficiary(newBeneficiary:any):Observable<any>{
    return this.http.post(this.api_url+ 'api/beneficiaries/',newBeneficiary)
  }

  addBeneficiary2(title:string,description:string, user_image:File){

    return this.http.post<any>(this.api_url + 'api/beneficiaries/',
    {title,description,user_image },httpOptions ).pipe(
      map((work:any)=>{}));
  }

}
