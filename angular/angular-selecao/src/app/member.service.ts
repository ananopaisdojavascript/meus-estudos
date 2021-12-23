import { Injectable } from '@angular/core';
import { Members } from './members';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient: HttpClient) { }

  urlBase: string = 'http://localhost:3000';

  getMember() {
    return this.httpClient.get<Members[]>(`${this.urlBase}/members`)
  }
}
