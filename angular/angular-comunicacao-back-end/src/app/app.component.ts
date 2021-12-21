import { Produtos } from './produtos';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-comunicacao-back-end';

  constructor(private produtosService: ProdutosService){}

  produtos: Produtos[] = [];

  formularioDeProdutos = new FormGroup({
    nome: new FormControl('', Validators.required),
    preco: new FormControl(0, [Validators.required, Validators.min(1)])
  })

  ngOnInit(): void {
    this.produtosService.obterProdutos().subscribe(data => {
      this.produtos = data;
    })
  }

  incluirProduto() {
    const produto = this.formularioDeProdutos.value;
    this.produtosService.incluirProduto(produto).subscribe(data => {
      return this.produtos.push(data);
    })
    this.formularioDeProdutos.reset();
  }

  excluirProduto(produto: Produtos) {
    this.produtosService.excluirProduto(produto.id).subscribe(() => {
      const index = this.produtos.indexOf(produto)
      this.produtos.splice(index, 1)
    })
  }

}
