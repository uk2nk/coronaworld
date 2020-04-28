import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
commonBaseApi:string="https://api.covid19api.com";
cSummaryApi:string="/summary";
cCountryApi:string='/countries';
cCountryHistoryApi:string='/live/country/{country}/status/confirmed';
constructor(private http: HttpClient) { }
getSummary() {
  return this.http.get(this.commonBaseApi+this.cSummaryApi);
}
getCountry() {
  return this.http.get(this.commonBaseApi+this.cCountryApi);
}
getCountryHistory(country:string) {
  return this.http.get(this.commonBaseApi+this.cCountryHistoryApi.replace('{country}',country));
}
}
