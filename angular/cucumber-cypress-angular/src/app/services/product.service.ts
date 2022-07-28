import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { url } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(`${url}`).pipe(catchError(this.errorHandler))
  }

  find(id: string): Observable<Product> {
    return this.http.get<Product>(`${url}/${id}`).pipe(catchError(this.errorHandler))
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${url}`, JSON.stringify(product), this.httpOptions).pipe(catchError(this.errorHandler))
  }

  update(product: Product): Observable<Product[]> {
    return this.http.put<Product[]>(`${url}/${product.id}`, JSON.stringify(product), this.httpOptions).pipe(catchError(this.errorHandler))
  }

  delete(id: string): Observable<Product[]> {
    return this.http.delete<Product[]>(`${url}/${id}`, this.httpOptions).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: any) {
    let errorMessage = ''
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    } else {
      errorMessage: `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    return throwError(errorMessage)
  }

}
