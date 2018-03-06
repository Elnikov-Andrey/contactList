export class Contact {
  name: string;
  surname: string;
  items;

 constructor() {
    this.items = [{name: "Adam", surname: "Adam"}, {name: "Eva", surname: "Eva"}];
  }
}

export class TodoItem {
  name;
  surname;

  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}
