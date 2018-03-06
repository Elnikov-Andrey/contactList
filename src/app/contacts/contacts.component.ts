import { Component, OnInit, Input, Output } from '@angular/core';
import { Contact, TodoItem } from '../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  ngOnInit() {
  }
}
