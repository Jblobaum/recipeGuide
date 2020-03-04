import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrossFieldMatcher } from '../validators/matcher';
import { passwordMatchValidator } from '../validators/confirmPassword';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store';
import * as userActions from '../store/actions/userAction'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loginForm: FormGroup;
  matcher: CrossFieldMatcher;
  user$: Observable<Object>;
  msg: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private store: Store<RootState>,
    private router: Router
    ) {
      this.matcher = new CrossFieldMatcher()
      this.user$ = store.pipe(select('user'))
    }

    signUp(e){
      e.preventDefault();
      if(this.loginForm.valid){
      this.userService.signUp(this.loginForm.value.user, this.loginForm.value.pass).subscribe(
        res=>{
          if(res["success"]){
            this.router.navigate(["login"])
            this.msg = res["msg"]
            console.log(this.msg);
            
          }
          this.msg = res["msg"]
        }
      )
      }
    }

    addUser(e){
      e.preventDefault();
      if(this.loginForm.valid){
      this.store.dispatch(userActions.setUser({username: this.loginForm.value.user}))}
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.minLength(3)])],
      pass: ['', Validators.compose([Validators.required, Validators.maxLength(128), Validators.minLength(8)])],
      confirmPassword: ['' ]
    }, {validator: passwordMatchValidator});
  }

}
