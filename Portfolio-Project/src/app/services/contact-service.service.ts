import { Injectable } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  contacts: Contact[] = [
    {
      firstName: "Holley",
      lastName: "Highley",
      phoneNumber: '5129663300',
      email: 'holleyhighley@att.net'
    },
    {
      firstName: 'David',
      lastName: 'Brown',
      phoneNumber: '5125870346',
      email: 'gaslogexpress@gmail.com'
    },
    {
      firstName: 'Brenden',
      lastName: 'Nightengale',
      phoneNumber: '8009515111',
      email: 'brendennightengale@protectamerica.com'
    }
  ];

  constructor() { }
}
