import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cards } from 'src/app/models/cards';
import { loginService } from 'src/app/services/login.service';
import { WithdrawService } from 'src/app/services/withdraw.service';

@Component({
  selector: 'app-other-money',
  templateUrl: './other-money.component.html',
  styleUrls: ['./other-money.component.css']
})
export class OtherMoneyComponent implements OnInit {
  public logo = "assets/img/logo.png";

  otherForm: FormGroup;
  value: number;

  constructor(private router: Router, private withdrawService: WithdrawService) { }

  ngOnInit(): void {
    this.otherForm = new FormGroup({
      amount: new FormControl()
    });
  }

  public toLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }

  public withdraw() {
    this.value = this.otherForm.get('amount').value; 
    this.withdrawService.withdraw(sessionStorage.getItem('cardNo'), this.value).subscribe(
      res => {
        if(res) {
          this.router.navigateByUrl("/balance");
        }
      },
      err => {
        this.router.navigateByUrl("/");
        console.log(err);
      }
    );
    
  } 
}
