import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router, private activeRoute: ActivatedRoute) { }

  title: string = 'Formulário'

  buttonName: string = 'Incluir Produto'

  productForm = new FormGroup({
    productName: new FormControl('', Validators.required)
  })


  ngOnInit(): void {
  }

}
