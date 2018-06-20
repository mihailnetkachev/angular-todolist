import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getTasks(): Task[] {
    let tasks: Task[] = [];
    const storage = localStorage.getItem('tasks');
    if (storage) {
      const str = JSON.parse(storage);
      str.forEach((task) => {
        tasks = [...tasks, new Task(task.creatingDate, task.text)];
      });
    }
    return tasks;
  }

  addTask(task: Task): void {
    const updatedStorage: Task[] = [...this.getTasks(), task];
    localStorage.setItem('tasks', JSON.stringify(updatedStorage));
  }

  removeTask(id): void {
    let storage: Task[] = this.getTasks();
    storage = storage.filter(({creatingDate}: Task) => creatingDate !== id);
    localStorage.setItem('tasks', JSON.stringify(storage));
  }

  editTask(taskList: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }

  triggeringTaskCompleting(id): void {}
}
