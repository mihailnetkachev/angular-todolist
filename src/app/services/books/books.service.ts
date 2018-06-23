import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../../interfaces/book';

@Injectable()
export class BooksService {

  private url = 'https://anapioficeandfire.com/api/books/';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get(this.url).pipe( map((data: Book[]) => data.map(
      item => new Book(item.name, item.authors, item.numberOfPages, item.publisher, item.released, item.url)
    )));
  }
}
