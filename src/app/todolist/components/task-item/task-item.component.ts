import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditedTask } from '../../../interfaces/editedTask';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task;
  @Output() completingItemId = new EventEmitter<number>();
  @Output() editingItemOptions = new EventEmitter<EditedTask>();
  @Output() removingItemId = new EventEmitter<number>();

  public tooltipeShowingStatus = false;

  constructor() {}

  ngOnInit() {
  }

  createDateString(date): string {
    const actualDate = new Date(date);
    return `${actualDate.toLocaleTimeString()} ${actualDate.toLocaleDateString()}`;
  }

  completeTask(id: number): void {
    this.completingItemId.emit(id);
  }

  editTask(id: number, text: string): void {
    this.editingItemOptions.emit(new EditedTask(id, text));
    this.tooltipeShowingStatus = false;
  }

  removeTask(id: number): void {
    this.removingItemId.emit(id);
  }

  triggerTooltipeShowing(): void {
    this.tooltipeShowingStatus = !this.tooltipeShowingStatus;
  }

}
