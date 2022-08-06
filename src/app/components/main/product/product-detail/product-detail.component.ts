import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[
    ProductService,
    AlertifyService
  ]
})
export class ProductDetailComponent implements OnInit {

  // products:Product[]=[];
  // filteredProducts:Product[] = [];
  filterProducts:string="";
  searchKey:string="";
  error:any;

  filteredProduct:Product;
  product:Product;
  loading: boolean = false;
  
  constructor(private productService: ProductService,private activatedRoute: ActivatedRoute,private alertifyService: AlertifyService) { }

  childData="çocuk Data";

  @Input() parentToChildData:string;

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params => {
      this.productService.getProductById(params["productId"]).subscribe(data=>{
        //this.products=data;
        // this.filteredProducts=this.products;
        this.filteredProduct=data;
      },error=>{
         this.error=error;
      })
    })
    // this.activatedRoute.params.subscribe(params => {
    //   this.loading = true;

    //   this.productService.getProducts(params["id"]).subscribe(data => {

    //     this.products = data;
    //     this.loading = false;
    //   })
    // })


  }

}
