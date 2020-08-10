import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as global from '../models/global';

export class Balance{
  constructor( public balance: number){}
}

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(
    private http:HttpClient
  ) {}

  private baseUrl = global.server;

  public getBalance() {
    let cardNo= sessionStorage.getItem("cardNo");
    let pinCode = sessionStorage.getItem("pinCode");
    let accountID = sessionStorage.getItem('accountID');

    let headers = new HttpHeaders({Authorization: 'Basic ' + window.btoa(cardNo + ':' + pinCode)});
    return this.http.get<Balance>(this.baseUrl + '/api/v1/balance/'+ accountID,{headers});
  }

}
