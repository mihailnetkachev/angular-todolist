import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.css']
})
export class FormfieldComponent implements OnInit {

  @Output() taskText = new EventEmitter<string>();

  constructor() { }

  getTextOfTask(text: string): void {
    this.taskText.emit(text);
  }
  ngOnInit() {
  }

}
