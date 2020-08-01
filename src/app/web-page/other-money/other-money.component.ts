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
  checkBalance = false;
  format = false;
  constructor(private router: Router, private withdrawService: WithdrawService) { }

  ngOnInit(): void {
    this.otherForm = new FormGroup({
      amount: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(50000), Validators.max(10000000)])
    });
    // setTimeout(() => {
    //   sessionStorage.clear();
    //   this.router.navigateByUrl('/');
    // }, 30000);
  }

  public toLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }

  public withdraw() {
    this.value = this.otherForm.get('amount').value;
    sessionStorage.setItem('amount', this.value.toString());
    if ( (this.value < 10000000) && (this.value > 50000) && ((this.value % 50000) != 0)) {
      this.checkBalance = true;
    } else {
      this.withdrawService.withdraw(sessionStorage.getItem('cardNo'), this.value).subscribe(
        res => {
          if(res) {
            this.router.navigateByUrl("/withdraw-success");
          }else {
            this.format = true;
          }
        },
        err => {
          this.router.navigateByUrl("/");
          console.log(err);
        }
      );
    }
  } 


}
