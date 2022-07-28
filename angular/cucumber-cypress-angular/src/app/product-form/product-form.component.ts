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

  title = ''

  buttonName = ''

  updateProduct = false;

  id: string;


  productForm = new FormGroup({
    product: new FormControl('', Validators.required)
  })

  create() {
    this.productService.create(this.productForm.value).subscribe(response => {
      this.router.navigate(['/produtos'])
      console.log("Produto cadastrado com sucesso!!!")
    })
  }


  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.id = param.get("id");
      this.productService.find(this.id).subscribe(product => {
        this.productForm.reset(product);
      })
    })

    this.updateProduct = !this.id;

    if(this.id) {
      this.title = 'Atualização de Produto'
      this.buttonName = 'Atualizar Produto'
    } else {
      this.title = 'Cadastro de Produto'
      this.buttonName = 'Cadastrar Produto'
    }
  }

  update() {
    this.productService.update({ id: this.id, ...this.productForm.value }).subscribe(data => {
      this.router.navigate(['/produtos'])
      console.log("Produto atualizado com sucesso!!!!")
    })
  }

  onSubmit() {
    if(this.id) {
      this.update()
    } else {
      this.create()
    }
  }

}
