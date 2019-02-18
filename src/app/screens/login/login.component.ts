import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  loginSubmit() {
    if (this.password.value === '') {
      alert('Enter password');
      return;
    } 
    
    console.log('Login submit');
    console.log(this.username.value + ' ' + this.password.value);
  }

}
