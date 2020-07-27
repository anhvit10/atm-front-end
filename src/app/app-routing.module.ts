import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './web-page/login/login.component';
import { PageNotFoundComponent } from './web-page/page-not-found/page-not-found.component';
import { MainScreenComponent } from './web-page/main-screen/main-screen.component';
import { CheckBalanceComponent } from './web-page/check-balance/check-balance.component';
import { CanActiveGuard } from './guard/can-active.guard';
import { ReceiptComponent } from './web-page/receipt/receipt.component';
import { WithdrawScreenComponent } from './web-page/withdraw-screen/withdraw-screen.component';
import { HistoryScreenComponent } from './web-page/history-screen/history-screen.component';



const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "main", component: MainScreenComponent},  
  { path: "balance", component: CheckBalanceComponent},
  { path: "receipt", component: ReceiptComponent},
  { path: "withdraw", component: WithdrawScreenComponent},
  { path: "history", component: HistoryScreenComponent},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
