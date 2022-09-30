import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Girls } from './girls';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/girls';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Girls[]> {
    return this.httpClient.get<Girls[]>(`${url}`);
  }

  getById(id: number): Observable<Girls> {
    return this.httpClient.get<Girls>(`${url}/${id}`);
  }

  create(girl: Girls): Observable<Girls> {
    return this.httpClient.post<Girls>(`${url}`, girl);
  }

  update(girl: Girls): Observable<Girls[]> {
    return this.httpClient.put<Girls[]>(`${url}/${girl.id}`, girl);
  }

  delete(id: number): Observable<Girls[]> {
    return this.httpClient.delete<Girls[]>(`${url}/${id}`);
  }
}
