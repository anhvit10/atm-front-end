import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Log } from 'src/app/models/log';
import { HttpClient } from '@angular/common/http';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history-screen',
  templateUrl: './history-screen.component.html',
  styleUrls: ['./history-screen.component.css']
})
export class HistoryScreenComponent implements OnInit {
  public logo = "assets/img/logo.png";

  constructor(private router: Router, private historyService: HistoryService) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   sessionStorage.clear();
    //   this.router.navigateByUrl("/");
    // }, 60000);
    let cardNo = sessionStorage.getItem("cardNo");

    this.historyService.getHistory(cardNo).subscribe(
      (res) => {
        console.log('res :', res);
      },
      (err) => {
        console.log(err);
      }
    )
    
  }

}
