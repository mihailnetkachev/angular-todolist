interface IEditedTask {
  id: number;
  text: string;
}

export class EditedTask implements IEditedTask {
  public id: number;
  public text: string;
  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }
}
