import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WithdrawService } from 'src/app/services/withdraw.service';

import * as global from 'src/app/models/global';

@Component({
  selector: 'app-withdraw-screen',
  templateUrl: './withdraw-screen.component.html',
  styleUrls: ['./withdraw-screen.component.css']
})
export class WithdrawScreenComponent implements OnInit {
  am1 = 500000;
  am2 = 1000000;
  am3 = 2000000;
  am4 = 5000000;
  am5 = 10000000;

  typeRes: any;
  Err : any;
  bankName = global.bankName;
  logo = global.logo;

  constructor(
    private router: Router, 
    private withdrawService: WithdrawService
  ) {}

  ngOnInit(): void {
  }

  public toOther() {
    this.router.navigateByUrl("/other");
  }

  public Withdraw(amount: number) {
    sessionStorage.setItem('amount', amount.toString());
    this.withdrawService.withdraw(sessionStorage.getItem('cardNo'), amount).subscribe(
      (res) => {
        this.typeRes = res;
        if(this.typeRes === 4) {
          this.router.navigateByUrl("/withdraw-success");
        }else if(this.typeRes === 2){
          this.Err = '2';
        }else if(this.typeRes === 3){
          this.Err = '3';
        }
      },
      (err) => {
        this.router.navigateByUrl("/");
        console.log(err);
      }
    );
  }

}
