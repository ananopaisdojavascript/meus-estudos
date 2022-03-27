import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  title: string = 'Cadastrar Contato'

  constructor(private contactService: RestapiService, private router: Router) { }

  createContactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  })

  createContact() {
    this.contactService.createContact(this.createContactForm.value).subscribe(contact => {
      this.router.navigate(['/contacts'])
    })
  }

  cancelContact() {
    this.createContactForm.reset()
  }

  submitContact() {
    this.createContact()
  }

  deleteContact() {}

  ngOnInit(): void {
  }

}
