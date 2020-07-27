import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './web-page/login/login.component';
import { PageNotFoundComponent } from './web-page/page-not-found/page-not-found.component';
import { MainScreenComponent } from './web-page/main-screen/main-screen.component';
import { CheckBalanceComponent } from './web-page/check-balance/check-balance.component';
import { CanActiveGuard } from './guard/can-active.guard';
import { ReceiptComponent } from './web-page/receipt/receipt.component';



const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "main", component: MainScreenComponent, canActivate: [CanActiveGuard]},  
  { path: "balance", component: CheckBalanceComponent, canActivate: [CanActiveGuard]},
  { path: "receipt", component: ReceiptComponent, canActivate: [CanActiveGuard]},
  { path: "**", component: PageNotFoundComponent, canActivate: [CanActiveGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
