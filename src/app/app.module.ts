import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { SortfieldComponent } from './components/sortfield/sortfield.component';
import { PaginationfieldComponent } from './components/paginationfield/paginationfield.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TodoListComponent,
    TaskItemComponent,
    SearchfieldComponent,
    SortfieldComponent,
    PaginationfieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
