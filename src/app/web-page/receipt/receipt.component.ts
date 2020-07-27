import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})

export class ReceiptComponent implements OnInit {
  
  constructor(private router: Router) {}

  today = new Date();
  rcTodays='';
  rcTime='';
  name: String;
  balance: any;

  ngOnInit(): void {
    this.name = sessionStorage.getItem('nameCus');
    this.balance = sessionStorage.getItem('balance');
    this.rcTodays = formatDate(this.today,'dd-MM-yyyy','en-US', '+0700');
    this.rcTime = formatDate(this.today,'hh:mm:ss a','en-US', '+0700');

    setTimeout(() => {
      sessionStorage.clear();
      this.router.navigateByUrl("/");
    }, 30000);
  }


}
