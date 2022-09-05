import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']

})
export class Login1Component implements OnInit {
  errorMessage: any;

  //invaliedLogin:boolean;
  loginForm = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl('')
    }
  );
  constructor(private router: Router, private _route: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder,
    private auth: AuthenticationServiceService, private _auth: AuthenticationService
  ) {
    if (this._auth.loggedIn) {
      this.router.navigate(['home']);
    }
  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  //   login(form: NgForm) {
  //     const credentials={
  //       'username':form.value.username,
  //       'password':form.value.password
  //     }
  //       let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  //       headers = headers.set('Host', '<hostname>');

  //       this.http.post<any>('https://localhost:44305/api/Auth1/login',credentials, { headers: headers },
  //       ).subscribe({
  //         next: data => {
  //           debugger;
  //           console.log(this.loginForm.value.username, this.loginForm.value.password);
  //           console.log(data);
  //           Swal.fire("Login Scuessfully");
  //           this.router.navigateByUrl("/home");
  //         },
  //         error: error => {
  //             this.errorMessage = error.message;
  //             Swal.fire("Invalid credentials");
  //             console.error('There was an error! ', error);
  //         }


  //   });
  // }



  login(form: NgForm) {
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }

    {
      this._auth.loginuser(credentials).subscribe({
        next: data => {
          debugger;
          console.log(this.loginForm.value.username, this.loginForm.value.password);
          console.log(data);
          Swal.fire("Login Scuessfully");
          this.router.navigateByUrl("/home");

        },
        error: error => {
          this.errorMessage = error.message;
          Swal.fire("Invalid credentials");
          console.error('There was an error! ', error);
        }
      })


    }


  }

}






