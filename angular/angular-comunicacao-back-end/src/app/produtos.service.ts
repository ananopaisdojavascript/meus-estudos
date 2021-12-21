import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClient: HttpClient) { }

  urlBase = 'http://localhost:3000';

  obterProdutos() {
    return this.httpClient.get<Produtos[]>(`${this.urlBase}/produtos`);
  }

  incluirProduto(produto: Produtos[]) {
    return this.httpClient.post<Produtos>(`${this.urlBase}/produtos`, produto);
  }

  excluirProduto(id: number) {
    return this.httpClient.delete(`${this.urlBase}/produtos/${id}`);
  }

}
