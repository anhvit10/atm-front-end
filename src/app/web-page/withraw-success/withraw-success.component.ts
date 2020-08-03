import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withraw-success',
  templateUrl: './withraw-success.component.html',
  styleUrls: ['./withraw-success.component.css']
})
export class WithrawSuccessComponent implements OnInit {
  logo = "assets/img/logo.png";

  constructor(private router: Router) { }

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
