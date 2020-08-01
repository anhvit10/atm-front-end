import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from 'src/app/services/history.service';
import { ColumnMode, SortType  } from '@swimlane/ngx-datatable';

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
    let cardNo = sessionStorage.getItem("cardNo");

    this.historyService.getHistory(cardNo).subscribe(
      (res) => {
        res.reverse();
        this.logs = res;
        this.logs.forEach(log => {
          log.logId = log.logID;
          log.description = log.logtype.description;          
        });
      },
      (err) => {
        console.log(err);
      }
    );
    // setTimeout(() => {
    //   sessionStorage.clear();
    //   this.router.navigateByUrl("/");
    // }, 30000);
    
  }

}
