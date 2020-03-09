import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { UserService } from '../services/user.service';
import * as Actions from '../store/actions'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  msg: string;

  
  
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<RootState>,
    private userService: UserService,
    private actr: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.actr.snapshot.routeConfig.path);
    
   }

   logIn(e){
    e.preventDefault();
     this.userService.logIn(this.loginForm.value.user, this.loginForm.value.pass).subscribe(
       res=>{
         if(res["success"]){
           console.log(res["msg"]);
           this.store.dispatch(Actions.setUser({username: this.loginForm.value.user}));
           localStorage.setItem("user", res["username"]);
           this.router.navigate([`user/${res["username"]}`]);
         }
         this.msg = res["msg"];
         console.log(res["msg"]);
         
       }
     );
   }




  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.minLength(3)])],
      pass: ['', Validators.compose([Validators.required, Validators.maxLength(128), Validators.minLength(8)])],
    });
  }
}