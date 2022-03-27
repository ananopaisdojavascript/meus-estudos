import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) {}

  taskUrl = 'http://localhost:3000'


}
