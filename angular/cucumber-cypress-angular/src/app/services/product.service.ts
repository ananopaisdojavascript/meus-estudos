import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { url } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(`${url}`)
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${url}/${id}`)
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${url}`, product)
  }

  update(product: Product): Observable<Product[]> {
    return this.http.put<Product[]>(`${url}/${product.id}`, product)
  }

  delete(id: string) {
    return this.http.delete<Product[]>(`${url}/${id}`)
  }
}
