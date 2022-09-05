import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  // constructor(private _router: Router) { }
  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //     if (localStorage.getItem('currentUser',)) {
  //         return true;
  //     }
  //     this._router.navigate(['']);
  //     return false;
  // }

  constructor(private loginSvc:AuthenticationService, private router:Router, private jwtHelper: JwtHelperService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      // if the user is logged in then return true else false
      const token = localStorage.getItem("JwtToken");
      if (token && !this.jwtHelper.isTokenExpired(token)){
        return true;
      }
      this.router.navigate(["login"]);
      return false;

  }
}
