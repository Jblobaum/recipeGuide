import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = false;
  constructor(private router: Router) { }

  get currentUser(){
    return localStorage.getItem('username')
  }

  signUp(username: string, password: string) {
    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
    this.isLoggedIn = true;
    this.router.navigate([`/user/${username}`])
  }

  logIn(username: string, password: string) {
    if (username == localStorage.getItem('username') && password == localStorage.getItem('password')) {
      this.isLoggedIn = true;
      this.router.navigate([`/user/${username}`])
      }
      else{
        console.log("fail");
      }
  }

  logOut() {
    this.isLoggedIn = false;
    this.router.navigate(['/login'])
  }
}
