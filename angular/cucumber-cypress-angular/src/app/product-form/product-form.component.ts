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

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  title = 'Título'

  buttonName = 'produto'

  updateProduct = false;

  id: string;

  product = '';

  productForm = new FormGroup({
    product: new FormControl('', Validators.required)
  })

  create() {
    this.productService.create(this.productForm.value).subscribe(data => {
      this.router.navigate(['/produtos'])
    })
    this.productForm.reset()
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = param.get("id")
      this.productService.getById(this.id).subscribe(product => {
        this.productForm.reset(product)
      })
    })

    this.updateProduct = !this.id;

    if(this.id) {
      this.title = 'Atualizar Produto'
      this.buttonName = 'Atualizar Produto'
    } else {
      this.title = 'Incluir Produto'
      this.buttonName = 'Incluir Produto'
    }
  }

  update() {
    this.productService.update({ id: this.id, ...this.productForm.value }).subscribe(data => {
      this.router.navigate(['/produtos'])
    })
    this.productForm.reset();
  }

  onSubmit() {
    if(this.id) {
      this.update()
    } else {
      this.create()
    }
  }

}
