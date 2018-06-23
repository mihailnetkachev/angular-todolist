import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.css']
})
export class SearchfieldComponent implements OnInit {

  @Output() soughtText = new EventEmitter<string>();
  soughtParticularTask = new FormControl();

  ngOnInit() {
    this.soughtParticularTask.valueChanges.subscribe((value) => {
      this.soughtText.emit(value);
    });
  }

}
