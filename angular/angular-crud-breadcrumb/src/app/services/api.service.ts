import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Girls } from './girls';

const url = 'http://localhost:3000/girls';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get<Girls[]>(`${url}`);
  }

  getById(id: number) {
    return this.httpClient.get<Girls>(`${url}/${id}`);
  }

  create(girl: Girls) {
    return this.httpClient.post<Girls>(`${url}`, girl);
  }

  update(girl: Girls) {
    return this.httpClient.put<Girls[]>(`${url}/${girl.id}`, girl);
  }

  delete(id: number) {
    return this.httpClient.delete<Girls[]>(`${url}/${id}`);
  }
}
