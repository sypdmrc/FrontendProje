import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  registerTitle: string="create user";

  constructor(private http: HttpClient,private registerService:RegisterService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const fullname = form.value.fullname;
    const email=form.value.email;
    const password=form.value.password;

    this.registerService.signUp(fullname, email, password).subscribe(response=>{
      console.log(response)
    })
  }
}
