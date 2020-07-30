import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  public getHistory(cardNo: string) {
    let pinCode = sessionStorage.getItem("pinCode");
    let headers = new HttpHeaders({Authorization: 'Basic ' + window.btoa(cardNo + ':' + pinCode)});

    return this.http.get<Log>(this.baseUrl + '/api/v1/history/'+ cardNo, {headers}).pipe(
      tap (
        (data) => {
          console.log('data', data);
        },
        (err) => {
          console.log(err);    
        }
      )
    );
  }
}