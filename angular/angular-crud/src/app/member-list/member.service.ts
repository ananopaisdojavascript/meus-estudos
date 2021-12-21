import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Members } from './members';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient: HttpClient) { }

  urlBase: string = 'http://localhost:3000';

  createMember(member: Members) {
    return this.httpClient.post<Members>(`${this.urlBase}/members`, member)
  }

  getMemberById(id: number) {
    return this.httpClient.get<Members[]>(`${this.urlBase}/members/${id}`)
  }

  getMember() {
    return this.httpClient.get<Members[]>(`${this.urlBase}/members`)
  }

  updateMember(member: Members) {
    return this.httpClient.put<Members>(`${this.urlBase}/members/${member.id}`, member)
  }

  deleteMember(id: number) {
    return this.httpClient.delete(`${this.urlBase}/members/${id}`)
  }

}

