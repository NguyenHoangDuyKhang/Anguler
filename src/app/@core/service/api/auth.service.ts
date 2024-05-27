import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

export interface ILogin{
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})



export class AuthService {
  url = 'https://knowledgehub.demopolyct.online/api/auth/login'
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
}
