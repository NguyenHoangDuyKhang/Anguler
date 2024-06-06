import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "./../service/api/auth.service";
// import {ROUTER_CONFIG} from "../config";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
  }

  canActivate(): boolean {
    if (this.authService.isLogin()) {
      return true;
    } else {
      this.router.navigate(['/login']).then();
      return false;
    }
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}