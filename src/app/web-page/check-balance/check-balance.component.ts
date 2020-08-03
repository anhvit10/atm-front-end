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
  warning = false;
  overdraft: any;
  constructor(
      private balanceService: BalanceService, 
      private router:Router
  ) {}

  ngOnInit(): void {
    this.overdraft = sessionStorage.getItem('overdraft');
    this.balanceService.getBalance().subscribe(
      (data) => {
        console.log(data);
        this.amount = data;
        if(this.amount === 0) {
          this.warning = true;
        }
      }
    );

  }

  public toLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }

  public toReceipt() {
    this.router.navigateByUrl("/receiptBalance");
  }


}
