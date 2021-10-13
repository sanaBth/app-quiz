import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private router: Router){}
  public userconnected : User
  i:number
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      //authetication and authoraziation here
      //call a user service - pass user/pwd and make sure the user is correct
      this.userconnected = JSON.parse(localStorage.getItem('userconnected') || '');
     
      
        if(this.userconnected.role == 'user')
        {
        
        return true;
        }
      this.router.navigate(['/home'])
      return false;
  }
  
}
