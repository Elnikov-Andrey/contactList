import { Component, OnInit, Input, Output } from '@angular/core';
import { Contact, TodoItem } from '../models/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})

export class ContactsListComponent implements OnInit {
  @Input() TodoItem;
  @Input() Contact;

  contact = new Contact();

  constructor() { }

  addItem(name, surname) {
    if (name !== "" && surname !== "") {
      this.contact.items.push(new TodoItem(name, surname));
    }
  }

  getTodoItems() {
    return this.contact.items;
  }

  details(name, surname) {
    alert('');
  }

  ngOnInit() {
  }

}
