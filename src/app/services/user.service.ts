import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

  get currentUser(){
    return localStorage.getItem('username')
  }

  signUp(username: string, password: string) {
    this.http.post('/signup', {username: username, password: password})
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
