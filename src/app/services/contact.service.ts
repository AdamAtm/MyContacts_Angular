import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Contact[] {
    return JSON.parse(localStorage.getItem('contacts') || '[]');
  }

  setContacts(contacts: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
}
