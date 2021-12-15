import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  @Output() addContact = new EventEmitter<Contact>();

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    pseudo: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const { name, pseudo, email } = this.form.value;
    const contact = new Contact(name, email, pseudo);
    this.addContact.emit(contact);
    this.form.reset();
  }

}
