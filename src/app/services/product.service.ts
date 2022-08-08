import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, tap } from 'rxjs'
import { Product } from '../models/product'

@Injectable()
export class ProductService {
  // url = 'http://localhost:3000/products'
  url_firebase = 'https://frontend-proje-default-rtdb.firebaseio.com/'

  constructor(private http: HttpClient) {}

  getProducts(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.url_firebase + 'products.json').pipe(
      map((response) => {
        const products: Product[] = []

        for (const key in response) {
          if (categoryId) {
            if (categoryId == response[key].categoryId) {
              products.push({ ...response[key], id: key })
            }
          } else {
            products.push({ ...response[key], id: key })
          }
        }

        return products
      }),
      tap((data) => console.log(data)),
    )
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(this.url_firebase + 'products/'+productId+'.json')


  }
}
