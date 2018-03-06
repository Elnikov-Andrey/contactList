import { Component, OnInit, Input, Output } from '@angular/core';

// export class Contact {
//   constructor(public name: string,
//               public surname: string) { }
// }

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  // contact: Contact[] = [];

  // addItem(name: string, surname: string) {
  //   // this.contact.push(new FormComponent(name, surname));

  //   if (name !== "" && surname !== "") {
  //     this.contact.push(new Contact(name, surname));
  //   }
  // }

  ngOnInit() {
  }
}
