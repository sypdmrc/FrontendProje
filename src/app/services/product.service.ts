import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Product } from '../models/product'

@Injectable()
export class ProductService {
  url = 'http://localhost:3000/products'

  constructor(private http: HttpClient) {}

  getProducts(category: string): Observable<Product[]> {
    let newUrl=this.url;

    if(category){
      newUrl+="?category="+category;
    }
    return this.http.get<Product[]>(newUrl)
  }

  getProductById(productId:number):Observable<Product>{
    return this.http.get<Product>(this.url+"/"+productId)
  }
}
