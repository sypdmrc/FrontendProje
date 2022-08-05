import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/main/product/product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: "home", component: ProductComponent },
  { path: "products", component: ProductsComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "products/category/:category", component: ProductComponent },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
