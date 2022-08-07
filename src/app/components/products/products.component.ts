import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/app/models/product'
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService],
})
export class ProductsComponent implements OnInit {
  products: Product[] = []

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productService
        .getProducts(params['categoryId'])
        .subscribe((data) => {
          this.products = data
        })
    })
  }
}
