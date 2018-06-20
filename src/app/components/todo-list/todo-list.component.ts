import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Task } from '../../interfaces/task';
import { EditedTask } from '../../interfaces/editedTask';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    ).pipe(
      map(   ([
        taskList = [],
        sortValue = '',
        searchValue = '']: [Task[], string, string]) => this.getTasksToRender(taskList, sortValue, searchValue)),
    );
  }
  public get tasks(): Task[] {
    return this._tasks.value;
  }

  compareStrings(soughtText: string, taskText): boolean {
    const soughtTextLower = soughtText.toLowerCase();
    const taskTextLower = taskText.toLowerCase();
    return taskTextLower.includes(soughtTextLower);
  }
  setSearchType(value): void {
    this.searchType.next(value);
  }
  setSortType(value: string): void {
    this.sortType.next(value);
  }
  setRenderPosition(value: number): void {
    console.log(value);
  }
  getTasksToRender(tasks: Task[], sortValue: string, searchValue: string): Task[] {
    let tasksToRender = [];
    if (searchValue || searchValue === '') {
      tasksToRender = tasks.filter((item) => {
        return this.compareStrings(searchValue, item.text);
      });
    }
    if (this.sortType) {
      tasksToRender.sort((a, b) => (a[sortValue] > b[sortValue]) ? 1 : -1);
    }

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
