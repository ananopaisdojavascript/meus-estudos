import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private contactService: RestapiService) { }

  title: string = 'Nossa Lista de Contatos'

  contacts: Contacts[] = [];

  deleteContact(contact: Contacts) {
    this.contactService.deleteContact(contact.id).subscribe(() => {
      const index = this.contacts.indexOf(contact)
      this.contacts.splice(index, 1)
    })
  }

  ngOnInit() {
    this.contactService.getContacts().subscribe(data => {
      return this.contacts = data
    })
  }

}
