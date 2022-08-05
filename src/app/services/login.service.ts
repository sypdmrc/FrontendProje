import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000/user'

  constructor(private http:HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<Login>(this.url , {
      email: email,
      password: password,
      
    })
  }
}
