import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8082/api/auth/signin';
  private signupUrl = 'http://localhost:8082/api/auth/signup';

  constructor(private http: HttpClient, private _router: Router) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  logoutUser() {
    localStorage.removeItem('AuthToken')
    this._router.navigate(['/home'])
  }

  getToken() {
    return localStorage.getItem('AuthToken')
  }

  loggedIn() {
    return localStorage.getItem('AuthToken')    
  }
 
  goTo(){
    
    this._router.navigate(['/Dashboard'])
   }
   goToPlanning(){
    
    this._router.navigate(['/planning'])
   }
}
