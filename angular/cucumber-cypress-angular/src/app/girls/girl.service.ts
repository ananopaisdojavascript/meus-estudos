import { Injectable } from '@angular/core';
import { Girls } from './girls';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GirlService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:3000';

  getData() {
    return this.httpClient.get<Girls[]>(`${this.url}/members`);
  }
}
