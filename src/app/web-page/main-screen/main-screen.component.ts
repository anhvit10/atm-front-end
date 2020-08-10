import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as global from 'src/app/models/global';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  
  bankName = global.bankName;
  logo = global.logo;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  public toBalance() {
    this.router.navigateByUrl("/balance");
  }

  public toWithdraw() {
    this.router.navigateByUrl("/withdraw");
  }

  public toHistory() {
    this.router.navigateByUrl("/history");
  }

  public logOut () {
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }
}
