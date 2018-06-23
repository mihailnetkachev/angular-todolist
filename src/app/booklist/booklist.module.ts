import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooklistRoutingModule } from './booklist-routing.module';

import { BooksService } from '../services/books/books.service';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';

@NgModule({
  imports: [
    CommonModule,
    BooklistRoutingModule,
    HttpClientModule
  ],
  declarations: [
    BookListComponent,
    BookItemComponent,
  ],
  providers: [BooksService]
})
export class BooklistModule { }
