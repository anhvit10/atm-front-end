import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { BalanceService } from 'src/app/services/balance.service';
@Component({
  selector: 'app-receipt-balance',
  templateUrl: './receipt-balance.component.html',
  styleUrls: ['./receipt-balance.component.css']
})
export class ReceiptBalanceComponent implements OnInit {

  constructor( 
    private router: Router, 
    private balanceService: BalanceService
  ) {}

  today = new Date();
  name: String;
  balance: any;
  amount: any;

  rcTodays= '';
  rcTime= '';

  ngOnInit(): void {
    this.name = sessionStorage.getItem('nameCus');
    this.balanceService.getBalance().subscribe(
      (data) => {
        this.balance = data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.rcTodays = formatDate(this.today,'dd-MM-yyyy','en-US', '+0700');
    this.rcTime = formatDate(this.today,'hh:mm:ss a','en-US', '+0700');
    
    setTimeout(() => {
      this.logOut();
    }, 5000);
  }

  private logOut() {
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }

}

