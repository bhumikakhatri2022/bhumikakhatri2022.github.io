import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import {shareReplay,map, retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {


  isLoggedIn = false;

  constructor(private httpClient: HttpClient) { }

  validateUser(username:string, password:string){
    // any rest api to get the authentication to be done

  //  return this.httpClient.post("http://localhost:2046/api/Account/login", {username , password},
  return this.httpClient.post("https://localhost:44305/api/Auth1/login`", {username , password},


    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  LoginStatus(){
    return this.isLoggedIn
  }

  Logout(){
    this.isLoggedIn=false;
    localStorage.clear();
  }

  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


}
