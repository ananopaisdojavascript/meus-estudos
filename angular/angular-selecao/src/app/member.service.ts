import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Members } from './members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http: HttpClient) {}

  urlBase = 'http://localhost:3000';

  getData() {
    return this.http.get<Members[]>(`${this.urlBase}/members`);
  }
}
