import { Observable } from 'rxjs';
/**
 * Serviço: ampla categoria que engloba qualquer função, valor ou funcionalidade
 * que um aplicativo precisa.
 *
 * Qual é a diferença entre componentes e serviços?
 *
 * Os componentes devem usar os serviços para mostrar a lógica para o usuário.
 * O serviço é responsável pela lógica do aplicativo.
 */

import { Injectable } from '@angular/core';
// Importar o HttpClient para fazer a comunicação com o backend
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Importar a variável de ambiente onde está a url
import { environment } from '../../environments/environment';
// Importar a interface
import { Product } from '../models/products';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /*
  Observable: funcionalidade do Angular que possibilita o compartilhamento de
  de dados a todas as partes de um aplicativo
  */

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(`${url}`)
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${url}/${id}`)
  }

  /** POST: add a new hero to the server */
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${url}`, product, this.httpOptions)
  }

  /** PUT: update the product on the server */
  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${url}/${product.id}`, product, this.httpOptions)
  }

  /** DELETE: delete the product from the server */
  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${url}/${id}`, this.httpOptions)
  }

}
