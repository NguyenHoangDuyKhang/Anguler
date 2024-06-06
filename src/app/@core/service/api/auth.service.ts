import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface ILogin{
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  url = 'https://knowledgehub.demopolyct.online/api/auth/login'
  private jwtHelperService = new JwtHelperService();
  loginForm!: ILogin;
  constructor(
    private _http: HttpClient,
  ) { }

  loggin(data: ILogin): Observable<any>{
    return this._http.post(this.url, {
      email: data.email,
      password: data.password
    })
  }

  isLogin(): boolean {
    if(this.getToken()){
        const exp = this.jwtHelperService.isTokenExpired(this.getToken());
        console.log(this.getToken());
        
        if(exp){
            localStorage.removeItem('token');
        }
        return !exp;
    }
    return false;
  }

  getToken(): string {
    // let Token = JSON.parse(localStorage.getItem('token')??'')
    // return Token
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MTc1NjU1MzgsImV4cCI6MTcxNzU2NjczOSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.N4e0vOs7_RR7soG_UCfnrmfiAsbZ5eKaT12K8DaSdB4'
  }

  setToken(token:string){
    localStorage.setItem('token', JSON.stringify(token))
  }
}
