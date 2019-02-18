import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', Validators.required),
    cpassword: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get cpassword() {
    return this.registerForm.get('cpassword');
  }

  registerSubmit() {
    console.log('Register submit');
    console.log(this.username.value + ' ' + this.password.value + ' ' + this.username.value);
  }

}
