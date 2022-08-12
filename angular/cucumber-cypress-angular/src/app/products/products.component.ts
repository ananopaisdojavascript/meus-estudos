import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsArray: Product[] = [];

  constructor(private productService: ProductService) {}

  title = 'Nossa Lista de Compras'

  getProducts() {
    this.productService.get().subscribe(data => {
      this.productsArray = data
    })
  }

  ngOnInit(): void {
    this.getProducts()
  }

}
