interface IPage {
  index: number;
}

export class Page implements IPage {
  public index: number;
  constructor(index: number) {
    this.index = index;
  }
}
