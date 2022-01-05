import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Girls {
  name: string;
  age: number;
  country: string;
  imageLink: string;
  MBTI: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  urlBase: string = 'http://localhost:3000';

  getGirls() {
    return this.http.get<Girls[]>(`${this.urlBase}/girls`);
  }
}
