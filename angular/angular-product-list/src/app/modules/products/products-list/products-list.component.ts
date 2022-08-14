import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product';
import { ProductsService } from 'src/app/services/products.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  title: string = 'Nossa Lista de Compras';

  productArray: Product[]

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.productArray = data
    })
  }

  deleteProduct(product: Product): void {
    this.productArray = this.productArray.filter(product => product !== product);
    this.productService.deleteProduct(product.id).subscribe();
  }

  ngOnInit(): void {
    this.getProducts()
  }

}
