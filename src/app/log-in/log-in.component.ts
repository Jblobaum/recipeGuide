import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }






  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.minLength(3)])],
      pass: ['', Validators.compose([Validators.required, Validators.maxLength(128), Validators.minLength(8)])]
    })
  }
}