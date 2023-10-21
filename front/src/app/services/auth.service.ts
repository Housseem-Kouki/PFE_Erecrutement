import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  clearTimeout: any;
  
  private _loginUrl = "http://127.0.0.1:8000/api/login";
  private _regesterUrl="http://127.0.0.1:8000/api/inscription";
  constructor(private http: HttpClient , private router : Router) {  }

loginUser(user)
{
  return this.http.post<any>(this._loginUrl, user); 
}

loggedIn() {
  return !!localStorage.getItem('token')
}

getToken(){ 
  return localStorage.getItem('token')
}

logoutUser(){
  localStorage.removeItem('token');
  this.router.navigate(['/visiteur'])
}

registerUser(user){
  return this.http.post<any>(this._regesterUrl,user);

}

autoLogout(expirationDate: number) {
  console.log(expirationDate);
  this.clearTimeout = setTimeout(() => {
    this.logoutUser();
  }, expirationDate);
}





}