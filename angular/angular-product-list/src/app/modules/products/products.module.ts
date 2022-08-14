import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsListComponent, ProductFormComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule, FormsModule
  ]
})
export class ProductsModule { }
