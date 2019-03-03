import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  loginSubmit() {
    this.auth.authentiate(this.username.value, this.password.value).subscribe(response => {
      console.log('Login submit');
      console.log(response.code);
    }, error => {
      console.log('Error occured');
      console.log(error);
    });
  }

}
