import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/booklist', pathMatch: 'full'
  },
  {
    path: 'todolist', loadChildren: './todolist/todolist.module#TodolistModule'
  },
  {
    path: 'booklist', loadChildren: './booklist/booklist.module#BooklistModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})

export class RoutingModule { }
