import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books/books.service';
import { Book } from '../../../interfaces/book';

@Component({
  selector: 'app-iceandfire-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: any;

  constructor(private IAndFService: BooksService) { }

  ngOnInit() {
    this.IAndFService.getBooks().subscribe(data => { this.books = data; } );
  }

  logging(): void {
    console.log(this.books);
  }

}
