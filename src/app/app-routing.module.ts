import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/main/product/product.component';

const routes: Routes = [
  { path: "home", component: ProductComponent },
  { path: "products", component: ProductComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "products/category/:category", component: ProductComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
