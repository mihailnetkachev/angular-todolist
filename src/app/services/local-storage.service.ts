import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { EditedTask } from '../interfaces/editedTask';
import {st} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getTasks(): Task[] {
    const tasks: Task[] = [];
    const storage = localStorage.getItem('tasks');
    if (storage) {
      const str = JSON.parse(storage);
      str.forEach((task) => {
        tasks.push(new Task(task.creatingDate, task.text));
      });
    }
    return tasks;
  }
  addTask(task: Task): void {
    const updatedStorage: Task[] = [...this.getTasks(), task];
    localStorage.setItem('tasks', JSON.stringify(updatedStorage));
  }
  removeTask(id): void {
    const storage: Task[] = this.getTasks();
    storage.forEach((item, index, arr) => {
      if (item.creatingDate === id) {
        arr.splice(index, 1);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(storage));
  }

  editTask(taskList: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }
  triggeringTaskCompleting(id): void {}
}
