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
    this.productService.get().subscribe(data => {
      this.productArray = data;
    })
  }

  delete(product: Product) {
    this.productService.delete(product.id).subscribe(data => {
      const index = this.productArray.indexOf(product)
      this.productArray.splice(index, 1)
    })
  }


  ngOnInit(): void {
    this.get()
  }

}
