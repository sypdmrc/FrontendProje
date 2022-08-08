import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'
import { Observable } from 'rxjs'

import { LoginService } from 'src/app/services/login.service'
import { Login } from 'src/app/models/login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginTitle: string = 'Login'

  error: string

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form)
    // if (form.invalid){
    //   const email = form.value.email;
    //   const password = form.value.password;
    //   console.log("form invalid");
    //   console.log(email,password)

    //   return;
    // }

    const email = form.value.email
    const password = form.value.password

    let loginResponse: Observable<Login>
    loginResponse = this.loginService.login(email, password)

    loginResponse.subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['/'])
        } else this.router.navigate(['/error'])
      },
      (err) => {
        this.error = err
      },
    )

    form.reset()
  }
}
