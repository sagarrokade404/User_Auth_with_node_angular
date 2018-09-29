import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable()
export class DataSerivces {
token_user;
  constructor(private http: HttpClient, private router: Router) {

  }

   registeruser(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    };
    return this.http.post('http://localhost:3000/api/users/signup', data).pipe(
      map( res => res)
    );
  }

  loginuser(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    };
    return this.http.post('http://localhost:3000/api/users/login', data).pipe(
      map( res => res)
    );

  }

  getuserDetails() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    };
    return this.http.get(`http://localhost:3000/api/users/me`).pipe(
      map( res => res)
    );
  }

  storelocaltoken(token) {
    localStorage.setItem('token', token);
  }

  returnuserfromtoken() {
    const token = localStorage.getItem('token');
     this.token_user = jwt_decode(token);
      const user_id =  this.token_user.id;
        if (user_id) {
          this.login_user(user_id);
        }
  }

  login_user(user_id) {
      this.router.navigate(['/userdata']);
  }

  logout() {
    localStorage.clear();
  }
 }
