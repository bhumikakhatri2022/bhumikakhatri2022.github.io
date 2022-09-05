import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../User';
import Swal from 'sweetalert2';
Swal

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userId = "0";
 Todos: User[] =[];
 term!: string;
  //Todos!: User[];
  data:any;

 // Users:User []| null = null;

    config: any;
    collection = [];
    isLogedin=false;
  constructor(private todoSvc:UserService,

    private activeRoute:ActivatedRoute,private loginSvc:AuthenticationServiceService,
    private router:Router) {
      this.config = {
        currentPage: 1,
        itemsPerPage: 10
  };
  this.activeRoute.queryParamMap
            .pipe(map((params: { get: (arg0: string) => any; }) => params.get('page')))
            .subscribe((page: any) => this.config.currentPage = page);

    for (let i = 1; i <= 100; i++) {
    // this.collection.push({this.Todos});
    }

  }

 ngOnInit() {
 // this.getPage(1);

  this.todoSvc.getData().subscribe(res => {
    this.Todos =(<any>res).$values;
    console.log(this.Todos)});

  this.userId = this.activeRoute.snapshot.queryParamMap.get('id') || "0"



  }

  // deleteTodo(id: string) {
  //   debugger
  //   this.todoSvc.deleteData(id).subscribe(res => {
  //     this.data = res;
  //     this.router.navigateByUrl("/list");

  //   })
  // }


  deleteTodo(id: string) {
    const user = this.Todos.find(x => x.userId=== id);
    if (!user) return;
  // user.isDeleting = true;
  if(confirm("Are you sure to delete ")) {
    this.todoSvc.deleteData(id)
    .pipe(first())
    .subscribe(() => this.Todos = this.Todos.filter(x => x.userId !== id));
  }
  else{
    this.todoSvc.getData()

  }
}



logout(){
  // this.router.navigate(["home"])
  this.router.navigateByUrl("/login");
  this.isLogedin = false;
  this.loginSvc.Logout();
}

// alertConfirmation()
// {
//   Swal.fire({
//     position: 'top-end',
//     title: 'Are you sure?',
//     text: 'This process is irreversible.',
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Yes, go ahead.',
//     cancelButtonText: 'No, let me think'
//   }).then((result) => {
//     if (result.value) {
//       Swal.fire(
//         'Removed!',
//         'Item removed successfully.',
//         'success'
//       )
//     } else if (result.dismiss === Swal.DismissReason.cancel) {
//       Swal.fire(
//         'Cancelled',
//         'Item is safe.)',
//         'error'
//       )
//     }
//   })
// }


pageChange(newPage: number) {
  this.router.navigate([''], { queryParams: { page: newPage } });
}

}

