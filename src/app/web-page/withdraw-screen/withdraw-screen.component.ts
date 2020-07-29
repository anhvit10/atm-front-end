import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  public logo = "assets/img/logo.png";

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      sessionStorage.clear();
      this.router.navigateByUrl("/");
    }, 120000);
  }

  public toOther() {
    this.router.navigateByUrl("/other");
  }
}
