import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../@core/service/api/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private router: Router, private authService: AuthService) { }
     user = {
      email: '',
      password: ''
     }; 

      users:any =[
        {
          email: 'khang@gmail.com',
          password: 12345678
        }
      ]
 

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  onSupmit(){
    // console.log(this.loginForm.value.email);
//  let checkEmail =  this.checkEmail(this.loginForm.value.email)
//     if(checkEmail == true){
//      let checkPassword =  this.checkPassword(this.loginForm.value.password);
//      if (checkPassword) {
//         this.router.navigateByUrl('/home');
//      }
//     }
if (this.loginForm.valid) {
    this.authService.loggin(this.loginForm.value).pipe()
    .subscribe({
      next: this.handleLoginSuccess.bind(this),
      error: this.handleLoginFailed.bind(this),
    })
}
  }

  checkEmail(email:string){
    const result = this.users.find((item:any) => item.email === email);
    if(result){
      this.user = result;
      return true;
    } else{
      return false;
    }

  }

  checkPassword(password:any){
    if(this.user && this.user.password == password){
      return true;
    } else{
      return false;
    }
  }

  protected handleLoginSuccess(res: any) {
    this.authService.setToken(res.token);
    alert("Hợp lý, cho zô")
    this.router.navigateByUrl('/home');
  }

  protected handleLoginFailed() {
    alert("Chưa Hợp lý lắm, chưa cho zô")
  }
}
