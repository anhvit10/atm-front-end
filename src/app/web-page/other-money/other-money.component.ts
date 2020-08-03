import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  typeRes :any;
  Err: any; 
  constructor(private router: Router, private withdrawService: WithdrawService) { }

  ngOnInit(): void {
    this.otherForm = new FormGroup({
      amount: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(50000), Validators.max(10000000)])
    });
    
  }

  public toLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }

  public withdraw() {
    this.value = this.otherForm.get('amount').value;
    sessionStorage.setItem('amount', this.value.toString());
    this.withdrawService.withdraw(sessionStorage.getItem('cardNo'), this.value).subscribe(
      (res) => {
        this.typeRes = res;
        if(this.typeRes === 4) {
          this.router.navigateByUrl("/withdraw-success");
        }else if(this.typeRes === 0){
          this.Err = '0';  
        }else if(this.typeRes === 1){
          this.Err = '1';
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
