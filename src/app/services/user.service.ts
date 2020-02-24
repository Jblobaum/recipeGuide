import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = false;
  constructor(private router: Router) { }

  signUp(username: string, password: string){
    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
    this.isLoggedIn = true;
    this.router.navigate([`/user/${username}`])
  }

  logOut(){
    this.isLoggedIn = false;
    this.router.navigate(['/login'])
  }
}
