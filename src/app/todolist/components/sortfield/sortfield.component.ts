import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sortfield',
  templateUrl: './sortfield.component.html',
  styleUrls: ['./sortfield.component.css']
})
export class SortfieldComponent implements OnInit {

  buttons = ['name', 'date'];
  @Output() sortType = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  setTypeOfSort(value: string): void {
    let sortProperty: string;
    switch (value) {
      case 'date':
        sortProperty = 'creatingDate';
        break;
      case 'name':
        sortProperty = 'text';
        break;
      default:
        sortProperty = 'creatingDate';
        break;
    }
    this.sortType.emit(sortProperty);
  }

}
