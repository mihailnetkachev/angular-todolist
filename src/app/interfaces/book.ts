interface BookInterface {
  name: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  released: Date;
  url: string;
}

export class Book implements BookInterface {

  public name: string;
  public authors: string[];
  public numberOfPages: number;
  public publisher: string;
  public released: Date;
  public url: string;

  constructor(name: string, authors: string[], numberOfPages: number, publisher: string, released: Date, url: string) {
    this.name = name;
    this.authors = authors;
    this.numberOfPages = numberOfPages;
    this.publisher = publisher;
    this.released = released;
    this.url = url;
  }

}

