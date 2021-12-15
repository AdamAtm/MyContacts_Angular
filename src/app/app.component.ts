import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gestion de mes contacts';
  contacts: Contact[] = [];
  selectedContact?: Contact = undefined;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  onContactSelected(contact: Contact) {
    this.selectedContact = contact;
  }

  onContactAdded(contact: Contact) {
    this.contacts.push(contact);
    this.contactService.setContacts(this.contacts);
  }

  onNameChange(name: string) {
    if (this.selectedContact) {
      this.selectedContact.name = name;
      this.contactService.setContacts(this.contacts);
    }
  }
}
