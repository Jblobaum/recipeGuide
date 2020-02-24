import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrossFieldMatcher } from '../validators/matcher';
import { passwordMatchValidator } from '../validators/confirmPassword';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loginForm: FormGroup;
  matcher: CrossFieldMatcher;

  constructor(
    private formBuilder: FormBuilder,
    ) {
      this.matcher = new CrossFieldMatcher()
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.minLength(3)])],
      pass: ['', Validators.compose([Validators.required, Validators.maxLength(128), Validators.minLength(8)])],
      confirmPassword: ['' ]
    }, {validator: passwordMatchValidator});
  }

}
