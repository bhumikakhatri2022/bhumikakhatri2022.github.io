import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../User';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  User:User ;
  EventValue: any = "Save";
  data:any;
  today=new Date();
  EmpForm = new FormGroup(
    {
      UserId: new FormControl(null),
      UserName: new FormControl(),
      UserEmail: new FormControl(),
      UserPassword:new FormControl(),
      UserDOB: new FormControl(),

    }

  );
  errorMessage: any;
  constructor(private user: UserService,  private formBuilder: FormBuilder ,
     private router:Router, private activeRoute:ActivatedRoute,) {
   this.User = new User()
   }

  submitted = false;
  userId = "0";
  Todo:any;


  ngOnInit(): void {

    this.userId = this.activeRoute.snapshot.queryParamMap.get('id') || "0"
    debugger
    this.user.getDatabyId(this.userId).subscribe(res => {
      console.log(this.User);
      this.Todo = res});

    // this.EmpForm = new FormGroup({
    //   userId: new FormControl(null),
    //   userName: new FormControl("",[Validators.required]),
    //   userEmail: new FormControl("",[Validators.required,Validators.email]),
    //   userPassword:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
    //   userDOB: new FormControl("",[Validators.required]),
    // })

    if (this.User) {
      this.user.getDatabyId(this.userId)
          .pipe(first())
          .subscribe(x => this.EmpForm.patchValue(x));
  }

  }

//   saveTodo() {
//     this.submitted = true;
//      if (this.EmpForm.invalid) {
//             return;
//      }
//      debugger
//      this.user.putData(this.userId,this.EmpForm.value).subscribe(res => {
//       Swal.fire("Data Update Scuessfully")
//       this.data = res;
//       this.router.navigate(["list"]);
//       this.resetFrom();
//     })

// }

saveTodo() {
  this.submitted = true;
   if (this.EmpForm.invalid) {
          return;
   }
     if(this.User.userEmail!=null)
     {
      this.user.putData(this.userId,this.EmpForm.value).
      subscribe({
      next: data => {
          Swal.fire("Data Update Scuessfully")
          this.data = data;
       this.router.navigate(["list"]);
        this.resetFrom();
        },
        error: error => {
            this.errorMessage = error.message;
            Swal.fire("This email already exists")
            console.error('There was an error! ', error);
        }
      })
     }
    }

 resetFrom()
{
  this.EmpForm.reset();
  this.EventValue = "Save";
  this.submitted = false;
}

}
