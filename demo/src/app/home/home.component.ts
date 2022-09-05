import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogedin=false;
  constructor(private loginSvc:AuthenticationServiceService,
    private authenticationService: AuthenticationService,
              private jwtHellper:JwtHelperService,
              private router:Router) {
   }

  ngOnInit(): void {
    var token =localStorage.getItem("JwtToken") as string;
    if(this.jwtHellper.isTokenExpired(token)){
      this.isLogedin = false;
    }
    else
      this.isLogedin=true;
  }

  ngDoCheck(){
    this.isLogedin = this.loginSvc.LoginStatus();
  }

  // logout(){
  //   // this.router.navigate(["home"])
  //   this.router.navigateByUrl("/login");
  //   this.isLogedin = false;
  //   this.loginSvc.Logout();
  // }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
