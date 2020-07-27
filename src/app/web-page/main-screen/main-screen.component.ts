import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  
  public logo = "assets/img/logo.png";
  public button = "assets/img/button.png";

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      sessionStorage.clear();
      this.router.navigateByUrl("/");
    }, 60000);
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

}
