import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router){}
  public userconnected : User
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      this.userconnected = JSON.parse(localStorage.getItem('userconnected') || 'null');

        if(this.userconnected)
        {
        
        return true;
        }
      this.router.navigate(['/'])
      return false;
  }
  
}
