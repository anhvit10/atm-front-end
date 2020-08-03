import { Component, OnInit } from '@angular/core';
import { ColumnMode, SortType  } from '@swimlane/ngx-datatable';
import { HistoryService } from 'src/app/services/history.service';


@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.css']
})
export class HistoryFilterComponent implements OnInit {

  ColumnMode = ColumnMode;
  SortType = SortType;
  public logo = "assets/img/logo.png";
  logs = [];

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    let day = sessionStorage.getItem('days');
    let days = parseInt(day);
    let date = new Date();

    date.setDate(date.getDate() - days);

    console.log(date);
    
    let cardNo = sessionStorage.getItem("cardNo");

    this.historyService.getHistory(cardNo, date).subscribe(
      (res) => {
        console.log(res);
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
    
  }

}
