import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Category } from '../models/category'

@Injectable()
export class CategoryService {
  // url = "http://localhost:3000/categories";
  url_firebase = 'https://frontend-proje-default-rtdb.firebaseio.com'

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url_firebase + '/categories.json')
  }
}
