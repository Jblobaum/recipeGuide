import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { passwordMatchValidator } from '../validators/confirmPassword';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState } from '../store';
import { UserService } from '../services/user.service';
import * as userActions from '../store/actions/userAction'


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  user$: Observable<Object>;
  loginForm: FormGroup;
  username: string = "";
  password: string = "";
  
  
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<RootState>,
    private userService: UserService
  ) {
    this.user$ = store.pipe(select('user'))
   }

   logIn(usernameToAdd){
     console.log(this.username);
     console.log(this.password);
     
     
     this.userService.logIn(this.username, this.password);
     this.store.dispatch(userActions.setUser(usernameToAdd))
   }




  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.minLength(3)])],
      pass: ['', Validators.compose([Validators.required, Validators.maxLength(128), Validators.minLength(8)])],
    });
  }
}