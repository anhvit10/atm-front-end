import { Component, OnInit } from '@angular/core';
import { ColumnMode, SortType  } from '@swimlane/ngx-datatable';
import { HistoryService } from 'src/app/services/history.service';

import * as global from 'src/app/models/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.css']
})
export class HistoryFilterComponent implements OnInit {
  
  // page = new Page();
  // rows = new Array<CorporateEmployee>();
  // cache: any = {};


  // @ViewChild('myTable') table;

  // private isLoading: boolean = false;

  // constructor(private serverResultsService: MockServerResultsService) {
  //   this.setPage({offset: 0, pageSize: 10});
  // }

  // ngAfterViewInit() {
  //   this.table.bodyComponent.updatePage = function(direction: string): void {
  //     let offset = this.indexes.first / this.pageSize;

  //     if (direction === 'up') {
  //       offset = Math.ceil(offset);
  //     } else if (direction === 'down') {
  //       offset = Math.floor(offset);
  //     }

  //     if (direction !== undefined && !isNaN(offset)) {
  //       this.page.emit({ offset });
  //     }
  //   }
  // }

  // /**
  //  * Populate the table with new data based on the page number
  //  * @param page The page to select
  //  */
  // setPage(pageInfo) {
  //   this.isLoading = true;
  //   this.page.pageNumber = pageInfo.offset;
  //   this.page.size = pageInfo.pageSize;

  //   this.serverResultsService.getResults(this.page).subscribe(pagedData => {
  //     this.page = pagedData.page;

  //     let rows = this.rows;
  //     if (rows.length !== pagedData.page.totalElements) {
  //       rows = Array.apply(null, Array(pagedData.page.totalElements));
  //       rows = rows.map((x, i) => this.rows[i]);
  //     }

  //     // calc start
  //     const start = this.page.pageNumber * this.page.size;

  //     // set rows to our new rows
  //     pagedData.data.map((x, i) => rows[i + start] = x);
  //     this.rows = rows;
  //     this.isLoading = false;
  //   });
  // }

  bankName = global.bankName;
  logo = global.logo;

  ColumnMode = ColumnMode;
  SortType = SortType;

  logs = [];

  constructor(
    private historyService: HistoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let days = parseInt(sessionStorage.getItem('days'));
    let cardNo = sessionStorage.getItem("cardNo");
  
    let date = new Date();
    date.setDate(date.getDate() - days);

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
    
    setTimeout(() => {
      this.logOut();
    }, 60000);
  }

  private logOut() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }

}
