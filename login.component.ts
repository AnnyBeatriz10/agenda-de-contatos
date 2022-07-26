import { LoginModel } from './LoginModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor( private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(
      {
        email: ['',[Validators.required, Validators.email]],
        senha: ['',[Validators.required]]
      }
    );
  }

  submitLogin() 
  {
    this.router.navigate(['agenda'])

  }

}
