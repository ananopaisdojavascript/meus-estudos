import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private productService: ProductService, private activeRoute: ActivatedRoute, private router: Router) { }

  title: string;

  buttonName: string;

  id: string;

  product: Product;

  editProduct = false;

  productForm = new FormGroup({
    product: new FormControl('', Validators.required)
  })

  addProduct(): void {
    this.productService.addProduct(this.productForm.value)
      .subscribe(hero => {
        this.router.navigate(['/produtos']);
      });
      this.productForm.reset()
  }

  getProduct(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id')!;
    if(this.id) {
      this.productService.getById(this.id).subscribe(product => {
        this.productForm.reset(product)
      })
    }
  }

  updateProduct(): void {
    if (this.id) {
      this.productService.updateProduct({ id: this.id, ...this.productForm.value })
        .subscribe(() => this.router.navigate(['/produtos']));
    }
    this.productForm.reset();
  }

  ngOnInit(): void {
    this.getProduct()

    this.editProduct = !this.id

    if(this.id) {
      this.title = 'Atualização de produtos'
      this.buttonName = 'Atualizar produto'
    } else {
      this.title = 'Cadastro de produtos'
      this.buttonName = 'Cadastrar produto'
    }
  }

}
