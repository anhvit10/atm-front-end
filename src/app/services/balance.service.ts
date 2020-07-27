import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

export class Balance{
  constructor(public balance: number){ 
  }
}

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  getBalance(){
    let header = this.getHeaders();
    let accountID = sessionStorage.getItem('accountID');

    let headers = new HttpHeaders({Authorization: header});

    return this.http.get<Balance>(this.baseUrl + '/api/v1/balance/'+accountID,{headers});
  }

  getHeaders() {
    let cardNo= sessionStorage.getItem("cardNo");
    let pinCode = sessionStorage.getItem("pinCode");

    let basicString = 'Basic ' + window.btoa(cardNo + ':' + pinCode);
    return basicString;
  }


}
