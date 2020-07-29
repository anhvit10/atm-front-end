import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-screen',
  templateUrl: './history-screen.component.html',
  styleUrls: ['./history-screen.component.css']
})
export class HistoryScreenComponent implements OnInit {
  public logo = "assets/img/logo.png";

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      sessionStorage.clear();
      this.router.navigateByUrl("/");
    }, 30000);
  }

}
