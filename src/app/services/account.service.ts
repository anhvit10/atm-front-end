import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  getCardByID(id: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/accounts/${id}`);
  }

}
