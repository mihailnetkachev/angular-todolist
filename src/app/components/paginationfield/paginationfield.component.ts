import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../../interfaces/page';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-paginationfield',
  templateUrl: './paginationfield.component.html',
  styleUrls: ['./paginationfield.component.css']
})
export class PaginationfieldComponent implements OnInit {

  public pageList: Page[];

  @Input() numberOfTasks: number;
  @Input() maxValueOfRender: number;
  @Output() renderIndex = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.pageList = this.createPageList();
  }

  createPageList(): Page[] {
    let currentIndex = 0;
    const numberOfPage = Math.ceil(this.numberOfTasks / this.maxValueOfRender);
    const pageList: Page[] = [];
    for (let i = 0; i < numberOfPage; i++) {
      pageList.push(new Page(currentIndex));
      currentIndex += this.maxValueOfRender;
    }
    return pageList;
  }

  setRenderIndex(index) {
    this.renderIndex.emit(index);
  }

}
