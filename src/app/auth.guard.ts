import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IsLoggedService } from './is-logged.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private isLoggedInService: IsLoggedService, private router: Router) {
    
   }
  OnInit() {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (!this.isLoggedInService.Logged) {
      this.router.navigate(['/login']);
      alert('You need to log in first to have an access to the curt , or maybe just click the submit button')
      return false;
    } else {
      return true;
    }
  }
  
}
