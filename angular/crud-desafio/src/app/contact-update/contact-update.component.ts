import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  title: string = 'Editar Contato'

  constructor(private contactService: RestapiService, private router: ActivatedRoute) { }

  updateContactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  })

  id: number | string | undefined;

  ngOnInit(): void {
    this.router.paramMap.subscribe(param => {
      this.id = Number(param.get('id'))
      this.contactService.getContactById(this.id).subscribe(contact => {
        this.updateContactForm.reset(contact)
      })
    })
  }


  submitUpdate() {
    this.contactService.updateContact({id: this.id, ...this.updateContactForm.value})
    .subscribe(contact => {
      this.updateContactForm.reset(contact)
    })
  }

}
