import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[
    ProductService,
    AlertifyService
  ]
})
export class ProductComponent implements OnInit {

  title:string="Product List";

  products:Product[]=[];

  filteredProducts:Product[] = [];

  filterProducts:string="";

  error:any;

  constructor(private productService: ProductService,private activatedRoute: ActivatedRoute,private alertifyService: AlertifyService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data;
        this.filteredProducts=this.products;
      },error=>{
        this.error=error;
      })
    })

  }

  onInputChange() {
    this.filteredProducts = this.filterProducts ?
    this.products.filter(p => p.name.toLowerCase().startsWith(this.filterProducts.toLowerCase())) : this.products;
  }

  addToList($event: any, product: Product) {
    if ($event.target.classList.contains("btn-success")) {
      $event.target.classList.remove("btn-success");
      $event.target.classList.add("btn-danger");
      $event.target.innerText = "Favorilerden Çıkar"


      this.alertifyService.success(product.categoryId + " favorilere eklendi")
    }
    else {
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-success");
      $event.target.innerText = "Favorilere Ekle"


      this.alertifyService.error(product.categoryId + " favorilerden çıkarıldı")
    }
  }




}
