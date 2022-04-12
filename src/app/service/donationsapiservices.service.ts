import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationsapiservicesService {

  constructor(private _http:HttpClient) { }

  // Providing the charities api
  charitiesApiUrl = 'https://donationapp254.herokuapp.com/api/charities/';

  // Providing the charity by id api
  // charityByIdUrl = 'https://donationapp254.herokuapp.com/api/charities/charities-id/4'



  // Start of getting the specific charity
  getCharity(id:any) {
    let charityUrl = 'https://donationapp254.herokuapp.com/api/charities/charities-id/' + id;

    return this._http.get<any>(charityUrl)
  }
  // End of charity by id call



  // Creating a function to grab the objects from the api
  charitiesProps():Observable<any> {
    return this._http.get(this.charitiesApiUrl)
  }


  // Getting details of a single id
  // charityProp():Observable<any> {
  //   return this._http.get(this.charityByIdUrl)
  // }

  // Posting donations
  donationsUrl = 'https://donationapp254.herokuapp.com/api/donations/';

  donationsMade(userData:any):Observable<any> {
    return this._http.post(this.donationsUrl, userData);
  }

}
