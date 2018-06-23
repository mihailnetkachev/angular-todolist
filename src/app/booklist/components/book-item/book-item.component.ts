import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() bookData;

  constructor() { }

  ngOnInit() {
  }

  transformDate(date: string): string {
    return `${new Date(date).toLocaleDateString()}`;
  }

}
