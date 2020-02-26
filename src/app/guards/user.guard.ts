import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

constructor(
  private router: Router,
  private userService: UserService
){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(this.userService.isLoggedIn){
        if(next.url[0].path === 'cocktail'){
          return true;
        }
        else{
          return next.params.username === this.userService.currentUser
        }
      }
      else{
        this.router.navigate(['./login'])
        return false;
      }
  }
  
}
