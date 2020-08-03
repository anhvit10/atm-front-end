import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from 'src/app/services/history.service';
import { ColumnMode, SortType  } from '@swimlane/ngx-datatable';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-history-screen',
  templateUrl: './history-screen.component.html',
  styleUrls: ['./history-screen.component.css']
})
export class HistoryScreenComponent implements OnInit {
  public logo = "assets/img/logo.png";
  logs = [];
  ColumnMode = ColumnMode;
  SortType = SortType;
  
  constructor(private router: Router, private historyService: HistoryService) { }

  ngOnInit(): void {
  }

  public toHistory(days: number) {
    sessionStorage.setItem('days', days.toString());
    this.router.navigateByUrl("/history-filter");
  }

}
