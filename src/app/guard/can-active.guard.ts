import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { loginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate, CanActivateChild {

  constructor(private auth: loginService, private router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.autResponse.pipe(
      map(check =>{
        if(check == true){
          return true;
        }else {
          sessionStorage.clear();
          this.router.navigateByUrl("/");
          return false;
        }
      })
    )
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
