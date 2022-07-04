import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tasks } from './tasks';

const url = 'http://localhost:3000/tasks';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Tasks[]>(`${url}`);
  }

  getById(id: number) {
    return this.http.get<Tasks>(`${url}/${id}`);
  }

  create(task: Tasks) {
    return this.http.post<Tasks>(`${url}`, task);
  }

  upload(task: Tasks) {
    return this.http.put<Tasks>(`${url}/${task.id}`, task);
  }

  delete(id: number) {
    return this.http.delete<Tasks>(`${url}/${id}`);
  }
}
