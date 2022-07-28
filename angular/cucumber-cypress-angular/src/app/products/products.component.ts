import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productArray: Product[];

  constructor(private productService: ProductService) {}

  title = 'Nossa Lista de Compras'

  get() {
    this.productService.get().subscribe((data: Product[]) => {
      this.productArray = data;
    })
  }

  delete(id: string) {
    this.productService.delete(id).subscribe(response => {
      this.productArray = this.productArray.filter(product => product.id !== id);
      console.log("Produto eliminado com sucesso!!!!")
    })
  }


  ngOnInit(): void {
    this.get()
  }

}
