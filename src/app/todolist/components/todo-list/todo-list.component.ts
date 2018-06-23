import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';
import { Task } from '../../../interfaces/task';
import { EditedTask } from '../../../interfaces/editedTask';
import { compareStrings } from '../../../helpers/helpers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private _tasks = new BehaviorSubject<Task[]>([]);
  public tasksToRender: Observable<Task[]>;
  public sortType = new BehaviorSubject<string>('');
  public searchType = new BehaviorSubject<string>('');
  public renderPosition = new BehaviorSubject<number>(0);
  public numberOfPage = 0;
  public renderValue = 3;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this._tasks.next(this.localStorageService.getTasks());
    this.taskSubscriber();
  }

  public taskSubscriber(): void {
    this.tasksToRender = combineLatest(
      this._tasks.asObservable(),
      this.sortType,
      this.searchType,
      this.renderPosition,
    ).pipe(
      map(([
        taskList = [],
        sortValue = '',
        searchValue = '',
        positionValue = 0]: [Task[], string, string, number, number]) => this.getTasksToRender(
          taskList, sortValue, searchValue, positionValue)
      ),
    );
  }

  public get tasks(): Task[] {
    return this._tasks.value;
  }

  setSearchType(value): void {
    this.searchType.next(value);
  }

  setSortType(value: string): void {
    this.sortType.next(value);
  }

  setRenderPosition(value: number): void {
    this.renderPosition.next(value);
  }

  calcNumberOfPage(numberOfTasks: number): void {
    this.numberOfPage = Math.ceil(numberOfTasks / this.renderValue);
  }

  getTasksToRender(tasks: Task[], sortValue: string, searchValue: string, renderPosition: number): Task[] {
    let tasksToRender = [];
    // search filter
    if (searchValue || searchValue === '') {
      tasksToRender = tasks.filter((item) => {
        return compareStrings(searchValue, item.text);
      });
    }
    // calc number of page
    this.calcNumberOfPage(tasksToRender.length);
    // sort filter
    if (this.sortType) {
      tasksToRender.sort((a, b) => (a[sortValue] > b[sortValue]) ? 1 : -1);
    }
    // pagination filter
    tasksToRender = tasksToRender.filter(
      (item, index) => (index >= renderPosition && index < renderPosition + this.renderValue)
    );

    return tasksToRender;
  }

  createTask(text): Task {
    const now = new Date();
    return new Task(+now, text);
  }

  noteTask(text): void {
    const newTask = this.createTask(text);
    this._tasks.next([...this.tasks, newTask]);
    this.localStorageService.addTask(newTask);
  }

  editTask(editedTask: EditedTask): void {
    const now = new Date();
    const taskList = this.tasks.map((item) => {
      return item.creatingDate === editedTask.id ? {...item, text: editedTask.text, editingDate: +now} : item;
    });

    this._tasks.next(taskList);
    this.localStorageService.editTask(taskList);
  }

  removeTask(id): void {
    const taskList = this.tasks.filter(({creatingDate}: Task) => creatingDate !== id);
    this._tasks.next(taskList);
    this.localStorageService.removeTask(id);
  }

  triggeringTaskCompleting(id): void {}
}
