import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  login({ username, password }: { username: string; password: string; }) {
    if (username == "admin" && password == "admin") {
      localStorage.setItem('currentUser', "loggedin");
     // return true;
    }
  }




  loginuser(credentials: any){
    return this.http.post(`${this.apiURL+"Auth1/login"}`,credentials)

  }





  logout() {
    localStorage.removeItem('currentUser');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }

}
