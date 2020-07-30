import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { loginService } from 'src/app/services/login.service';
import { Cards } from 'src/app/models/cards';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = "assets/img/logo.png";
  card: Cards;
  loginForm: FormGroup;
  alertLogin = false;
  block = false;

  constructor(private cardService: loginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      cardNo: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      pinCode: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")])
    });
    this.card = {
      cardNo: '',
      pinCode: '',
      status: '',
      startDate: '',
      expiredDate: '',
      attempt: null,
      account: null
    };
    this.card.attempt = 0;
  }

  OnSubmit() {
    this.card.cardNo = this.loginForm.get('cardNo').value;
    this.card.pinCode = this.loginForm.get('pinCode').value;
    this.cardService.login(this.card.cardNo, this.card.pinCode).subscribe(
      (res) => {
        if(res){
          sessionStorage.setItem('cardNo',this.card.cardNo);
          sessionStorage.setItem('pinCode',this.card.pinCode);
          sessionStorage.setItem('accountID',res.account.accountID.toString());
          sessionStorage.setItem('nameCus',res.account.customer.name.toString());
          sessionStorage.setItem('balance',res.account.balance.toString());
          sessionStorage.setItem('status',res.status.toString());
          if(sessionStorage.getItem('status') != 'block'){
            this.router.navigateByUrl("/main");
          }else {
            this.block = true;
          }
          console.log(sessionStorage);
        };
      },
      (err) => {
        this.alertLogin = true;
        this.card.attempt += 1;   
        if(this.card.attempt >= 3) {
          this.cardService.lockCard(this.card.cardNo).subscribe(
            (res) => {
              sessionStorage.setItem("status", res.status);
              this.card.status = sessionStorage.getItem("status");
              console.log(res);
              if (this.card.status === 'block' && this.card.cardNo === this.loginForm.get('cardNo').value && this.card.pinCode === this.loginForm.get('pinCode').value) {
                this.block = true;
                this.alertLogin = false;
              }
            },
            (err) => {
              console.log(err);
            }
          );
        }
      }
    );
    
  }
    
}
