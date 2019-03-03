import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

interface authMessage {
  code: number,
  msg: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private backEndDomain = environment.backEndDomain;

  constructor(private http: HttpClient) { }

  authentiate(username: string, password: string) {
    const params = {username, password};
    return this.http.post<authMessage>(this.backEndDomain + '/login', params);
  }

  register(username: string, password: string, cpassword: string) {
    const params = {username, password, cpassword};
    return this.http.post<authMessage>(this.backEndDomain + '/register', params);
  }

}
