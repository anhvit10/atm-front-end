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
  loginFail = 0;
  alertLogin = false;
  block = false;

  constructor(private cardService: loginService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      cardNo: new FormControl("",[Validators.required, Validators.pattern("^[0-9]*$")]),
      pinCode: new FormControl("",[Validators.required, Validators.pattern("^[0-9]*$")])
    });
    this.card ={
      cardNo: '',
      pinCode: '',
      status: false,
      startDate: '',
      expiredDate: '',
      attempt: null,
      account: null
    }
  }

  OnSubmit(){
    this.card.cardNo = this.loginForm.get('cardNo').value;
    this.card.pinCode = this.loginForm.get('pinCode').value;
    sessionStorage.setItem("checkLogin", status);
    this.cardService.login(this.card.cardNo, this.card.pinCode).subscribe(
      res=>{
        if(res){
          this.router.navigateByUrl('/main');
        };
      },
      err => {
        if(err.status == 401){
          this.alertLogin = true;
          this.loginForm.reset();
          this.loginFail +=1;
        }
      }
    );
    if(this.loginFail === 2){
      this.alertLogin = false;
      this.card.status = true;
    }
  }

}
