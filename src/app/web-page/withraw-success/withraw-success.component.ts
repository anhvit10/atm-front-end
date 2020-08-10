import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as global from 'src/app/models/global';

@Component({
  selector: 'app-withraw-success',
  templateUrl: './withraw-success.component.html',
  styleUrls: ['./withraw-success.component.css']
})
export class WithrawSuccessComponent implements OnInit {
  
  bankName = global.bankName;
  logo = global.logo;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  public toReceipt() {
    this.router.navigateByUrl("/receipt");
  }

  public toLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }
}
