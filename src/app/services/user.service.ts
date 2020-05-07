import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

  // get currentUser(){
  //   return localStorage.getItem('username')
  // }

  signUp(username: string, password: string) {
    return this.http.post('/api/users/signup', {username: username, password: password})
    
  }

  logIn(username: string, password: string) {
    return this.http.post('api/users/login', {username: username, password: password}).pipe(
      tap(res=> this.isLoggedIn = res["success"])
    )
    
    
  }

  logOut() {
    this.isLoggedIn = false;
    this.router.navigate(['/home'])
  }
}
