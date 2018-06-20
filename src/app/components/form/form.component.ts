import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() taskText = new EventEmitter<string>();

  constructor() { }

  getTextOfTask(text: string): void {
    this.taskText.emit(text);
  }
  ngOnInit() {
  }

}
