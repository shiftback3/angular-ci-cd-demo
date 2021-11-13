import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm:any ={
  email:"",
  password: ""
}
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.LoginForm.email == 'superadmin@localhost' && this.LoginForm.password == 'secret'){
      this.router.navigateByUrl('/dashboard');
    }
    console.log(this.LoginForm)
  }

}
