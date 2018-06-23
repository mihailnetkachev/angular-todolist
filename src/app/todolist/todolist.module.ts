import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodolistRoutingModule } from './todolist-routing.module';

import { FormfieldComponent } from './components/formfield/formfield.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { SortfieldComponent } from './components/sortfield/sortfield.component';
import { PaginationfieldComponent } from './components/paginationfield/paginationfield.component';

@NgModule({
  imports: [
    CommonModule,
    TodolistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormfieldComponent,
    TodoListComponent,
    TaskItemComponent,
    SearchfieldComponent,
    SortfieldComponent,
    PaginationfieldComponent,
  ]
})
export class TodolistModule { }
