import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import * as global from '../models/global';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private http: HttpClient
  ) {}

  private baseUrl = global.server;

  public getHistory(cardNo: string, logDate: Date) {
    let pinCode = sessionStorage.getItem("pinCode");
    let headers = new HttpHeaders({Authorization: 'Basic ' + window.btoa(cardNo + ':' + pinCode)});

    return this.http.get<Log>(this.baseUrl + '/api/v1/history/' + cardNo + '/' + logDate, {headers}).pipe(
      map(data => {
        const log: Log[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            log.push(new Log({...data[key], logID: key}));
          }
        }
        return log;
      })
    );
  }
}
