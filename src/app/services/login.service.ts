import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cards } from '../models/cards';
import { Observable, BehaviorSubject } from 'rxjs';
import { AutResponse } from '../models/aut-response';
import {  tap } from 'rxjs/operators';
import { Account } from '../models/account';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})  
export class loginService {

  private baseUrl = 'http://localhost:8080';
  public autResponse = new BehaviorSubject<boolean>(null);

  constructor(private http:HttpClient) {}

  public login(cardNo:string, pinCode:string) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + window.btoa(cardNo+":"+pinCode)});
    return this.http.get<Cards>(this.baseUrl + '/api/v1/login/' + cardNo,{headers}).pipe(
      tap(
        data=>{
          this.autResponse.next(true);
        },
        err => {
          console.log(err);    
        }
      )
    );
  }

  lockCard(cardNo: any){
    return this.http.get<Cards>(this.baseUrl + '/api/v1/login/updateStatus/' + cardNo).pipe(
      tap (
        (data) => {
          console.log(data);          
        },
        (err) => {
          console.log(err);
        }
      ),
    );
  }

}
