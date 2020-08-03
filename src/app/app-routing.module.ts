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
import { OtherMoneyComponent } from './web-page/other-money/other-money.component';
import { WithrawSuccessComponent } from './web-page/withraw-success/withraw-success.component';
import { ReceiptBalanceComponent } from './web-page/receipt-balance/receipt-balance.component';
import { HistoryFilterComponent } from './web-page/history-filter/history-filter.component';

const routes: Routes = [
  { path: "", component: LoginComponent
  },
  { path: "main", component: MainScreenComponent, 
    canActivate: [CanActiveGuard]
  },  
  { path: "balance", component: CheckBalanceComponent, 
    canActivate: [CanActiveGuard]
  },
  { path: "receipt", component: ReceiptComponent, 
    canActivate: [CanActiveGuard]
  },
  { path: "receiptBalance", component: ReceiptBalanceComponent, 
    canActivate: [CanActiveGuard]
  },
  { path: "withdraw", component: WithdrawScreenComponent, 
    canActivate: [CanActiveGuard]
  },
  { path: "history", component: HistoryScreenComponent, 
    canActivate: [CanActiveGuard]
  },
  { path: "history-filter", component: HistoryFilterComponent, 
    canActivate: [CanActiveGuard]
  },
  { path: "withdraw-success", component: WithrawSuccessComponent, 
    canActivate: [CanActiveGuard]
  },
  { path: "other", component: OtherMoneyComponent, 
    canActivate: [CanActiveGuard]
  },
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
