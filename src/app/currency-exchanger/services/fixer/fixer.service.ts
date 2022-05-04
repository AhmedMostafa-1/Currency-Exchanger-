import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FixerService {
   currencyDetails = new BehaviorSubject<any>(null);  
   constructor(public http: HttpClient) {}

  // set endpoint and your API key
  baseURL = "https://api.apilayer.com/fixer";

  currencySymbols(): Observable<any>{
    return this.http.get(`${this.baseURL}/symbols`);
  }
  currencyRate(): Observable<any> {
    return this.http.get(`${this.baseURL}/latest`)

  }
  getCurrencyCal(to,from,amount) {
    return this.http.get(`${this.baseURL}/convert?to=${to}&from=${from}&amount=${amount}`)
  }


}
