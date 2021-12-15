import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact = new Contact("","","");
  @Output() nameChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(event: any) {
    const name: string = event.target.value;
    if(name.length > 0) {
      this.nameChange.emit(name);
    }
  }

}
