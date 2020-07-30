import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cards } from '../models/cards';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public withdraw(cardNo: string, money: number)  {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.put<Cards>(this.baseUrl + '/api/v1/login/' + cardNo + '/withdraw', money, {headers}).pipe(
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
