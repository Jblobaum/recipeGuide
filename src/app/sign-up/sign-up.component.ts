import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrossFieldMatcher } from '../validators/matcher';
import { passwordMatchValidator } from '../validators/confirmPassword';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store';
import * as userActions from '../store/actions/userAction'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loginForm: FormGroup;
  matcher: CrossFieldMatcher;
  username: string = "";
  password: string = "";
  user$: Observable<Object>;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private store: Store<RootState>
    ) {
      this.matcher = new CrossFieldMatcher()
      this.user$ = store.pipe(select('user'))
    }

    signUp(){
      if(this.loginForm.valid){
      this.userService.signUp(this.username, this.password)
      }
    }

    clearUser(){
      this.store.dispatch(userActions.clearUser())
    }

    addUser(usernameToAdd: string){
      if(this.loginForm.valid){
      this.store.dispatch(userActions.setUser({username: usernameToAdd}))}
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.minLength(3)])],
      pass: ['', Validators.compose([Validators.required, Validators.maxLength(128), Validators.minLength(8)])],
      confirmPassword: ['' ]
    }, {validator: passwordMatchValidator});
  }

}
