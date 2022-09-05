import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Login1Component } from './login1/login1.component';
import { AddComponent } from './User-management/add/add.component';
import { EditComponent } from './User-management/edit/edit.component';
import { ListComponent } from './User-management/list/list.component';


const routes: Routes = [
  {
    path: '' , component: Login1Component, pathMatch: 'full'
  },
  {
    path: 'login' , component: Login1Component,

  },
  {
    path: 'home' , component: HomeComponent,
  },

  {
    path: 'add' , component: AddComponent,
  },
  {
    path: 'edit' , component: EditComponent,
  },
  {
    path: 'list' , component: ListComponent,
    data: {
      title: 'list'
    }
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
