import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactServiceService } from '../services/contact-service.service';

@Component({
  selector: 'app-contacts-component',
  templateUrl: './contacts-component.component.html',
  styleUrls: ['./contacts-component.component.css']
})
export class ContactsComponentComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactServiceService: ContactServiceService) {
    this.contacts= contactServiceService.contacts;
   }

  ngOnInit() {
  }

}
