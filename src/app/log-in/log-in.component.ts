import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store';
import { UserService } from '../services/user.service';
import * as Actions from '../store/actions'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  username: string = "";
  password: string = "";
  
  
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<RootState>,
    private userService: UserService,
    private actr: ActivatedRoute
  ) {
    console.log(this.actr.snapshot.routeConfig.path);
    
   }

   logIn(usernameToAdd){
     console.log(this.username);
     console.log(this.password);
     this.userService.logIn(this.username, this.password);
     this.store.dispatch(Actions.setUser({username: usernameToAdd}))
   }




  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.minLength(3)])],
      pass: ['', Validators.compose([Validators.required, Validators.maxLength(128), Validators.minLength(8)])],
    });
  }
}