import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  reg_username = '';
  reg_password = '';
  reg_cpassword = '';

  constructor() { }

  ngOnInit() {
  }

  loginSubmit() {
    if (this.password === '') {
      alert('Enter password');
      return;
    } 
    
    console.log('Login submit');
    console.log(this.username + ' ' + this.password);
  }

  registerSubmit() {
    console.log('Register submit');
    console.log(this.reg_username + ' ' + this.reg_password + ' ' + this.reg_cpassword);
  }

}
