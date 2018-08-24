import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponentComponent } from './components/contacts/contacts-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ContactsComponentComponent],
  exports: [ContactsComponentComponent]
})

export class ContactsModule { }
