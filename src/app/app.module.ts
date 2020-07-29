import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './web-page/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './web-page/page-not-found/page-not-found.component';
import { MainScreenComponent } from './web-page/main-screen/main-screen.component';
import { CheckBalanceComponent } from './web-page/check-balance/check-balance.component';
import { PricePipe } from './pipe/price.pipe';
import { loginService } from './services/login.service';
import { ReceiptComponent } from './web-page/receipt/receipt.component';
import { WithdrawScreenComponent } from './web-page/withdraw-screen/withdraw-screen.component';
import { HistoryScreenComponent } from './web-page/history-screen/history-screen.component';
import { OtherMoneyComponent } from './web-page/other-money/other-money.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainScreenComponent,
    CheckBalanceComponent,
    PricePipe,
    ReceiptComponent,
    WithdrawScreenComponent,
    HistoryScreenComponent,
    OtherMoneyComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [loginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
