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
import { HttpClient } from '@angular/common/http';
// Importar a variável de ambiente onde está a url
import { environment } from '../../environments/environment';
// Importar a interface
import { Product } from '../models/products';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  /*
  Observable: funcionalidade do Angular que possibilita o compartilhamento de
  de dados a todas as partes de um aplicativo
  */

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(`${url}/products`)
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${url}/products/${id}`)
  }

}
