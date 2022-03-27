import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from './contacts';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

  restapiUrl = 'http://localhost:3000'

  // Retornar todo o vetor de contatos
  getContacts() {
    return this.http.get<Contacts[]>(`${this.restapiUrl}/contacts`)
  }

  // Não retorna o vetor de contatos por trata-se de um único valor
  getContactById(id: number) {
    return this.http.get<Contacts>(`${this.restapiUrl}/contacts/${id}`)
  }

  createContact(contact: Contacts) {
    return this.http.post<Contacts[]>(`${this.restapiUrl}/contacts`, contact)
  }

  updateContact(contact: Contacts) {
    return this.http.put<Contacts[]>(`${this.restapiUrl}/contacts/${contact.id}`, contact)
  }

  deleteContact(id: number) {
    return this.http.delete<Contacts[]>(`${this.restapiUrl}/contacts/${id}`)
  }

}
