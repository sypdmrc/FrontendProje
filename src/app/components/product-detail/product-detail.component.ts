import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/app/models/product'
import { AlertifyService } from 'src/app/services/alertify.service'
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService, AlertifyService],
})
export class ProductDetailComponent implements OnInit {
  product: Product

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productService.getProductById(params['productId']).subscribe(
        (data) => {
          this.product = data
        },
        (error) => {
          //
        },
      )
    })
  }
}
