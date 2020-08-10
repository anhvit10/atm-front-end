import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode, SortType  } from '@swimlane/ngx-datatable';

import * as global from 'src/app/models/global';

@Component({
  selector: 'app-history-screen',
  templateUrl: './history-screen.component.html',
  styleUrls: ['./history-screen.component.css']
})
export class HistoryScreenComponent implements OnInit {

  bankName = global.bankName;
  logo = global.logo;
  logs = [];

  ColumnMode = ColumnMode;
  SortType = SortType;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public toHistory(days: number) {
    sessionStorage.setItem('days', days.toString());
    this.router.navigateByUrl("/history-filter");
  }

}
