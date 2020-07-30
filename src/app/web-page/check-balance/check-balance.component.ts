import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})

export class CheckBalanceComponent implements OnInit {
  amount: any;
  logo = "assets/img/logo.png";
  cardNo: any;

  constructor(
      private apiService: BalanceService, 
      private router:Router
  ) {}

  ngOnInit(): void {
    this.apiService.getBalance().subscribe(
      data => {
        this.amount = data;
      }
    );
    // setTimeout(() => {
    //   sessionStorage.clear();
    //   this.router.navigateByUrl("/");
    // }, 60000);
  }

  public toLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }

  public toReceipt() {
    this.router.navigateByUrl("/receipt");
  }


}
