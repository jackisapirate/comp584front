import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';

import { LoginResult } from './login-result';
import { environment } from '../../environments/environment';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(protected http: HttpClient) { }
  tokenKey: string = "jwt-token";
  roleKey: string = "jwt-role";
  private _authStatus = new Subject<boolean>();

  public authStatus = this._authStatus.asObservable();
  
  init(): void{
    if(this.isAuthenticated()){
      this.setAuthStatus(true);
    }
  }

  setAuthStatus(isAuthenticated: boolean) {
    this._authStatus.next(isAuthenticated);
  }

  isAuthenticated(): boolean{
    return this.getToken != null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }

  login(item: LoginRequest): Observable<LoginResult> {
    var url = environment.baseUrl + 'api/Account';
    return this.http.post<LoginResult>(url, item).pipe(tap((_loginResult: LoginResult) =>{
        if(_loginResult.success && _loginResult.token){
          localStorage.setItem(this.tokenKey, _loginResult.token);
          localStorage.setItem(this.roleKey, _loginResult.message);
          this.setAuthStatus(true);
        }
    }));
  }


  logout(){
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
    this.setAuthStatus(false);
  }
}
