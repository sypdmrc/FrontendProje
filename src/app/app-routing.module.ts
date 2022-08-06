import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/main/product/product-detail/product-detail.component';
import { ProductComponent } from './components/main/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: "home", component: ProductComponent },
  { path: "products", component: ProductsComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "products/category/:category", component: ProductComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "product/details", component: ProductDetailComponent },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
