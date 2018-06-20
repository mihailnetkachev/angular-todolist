interface ITask {
  creatingDate: number;
  editingDate: number;
  text: string;
  isComplete: boolean;
}

export class Task implements ITask {
  public creatingDate: number;
  public editingDate: number;
  public text: string;
  public isComplete: boolean;
  constructor(time: number, text: string) {
    this.creatingDate = time;
    this.editingDate = this.creatingDate;
    this.text = text;
    this.isComplete = false;
  }
}
