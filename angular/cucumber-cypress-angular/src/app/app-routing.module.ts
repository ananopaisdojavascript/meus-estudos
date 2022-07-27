import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {path: "produtos", component: ProductsComponent},
  {path: "form", component: ProductFormComponent},
  {path: "form/:id", component: ProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
