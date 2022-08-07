import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url = 'http://localhost:3000/user'

  constructor(private http: HttpClient) {}

  signUp(fullname: string, email: string, password: string) {
    return this.http.post(this.url, {
      fullname: fullname,
      email: email,
      password: password,
    })
  }
}
