import { Component, OnInit } from '@angular/core';
import {AccountServices} from '../services/account.services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Login} from '../interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountServices, private formBuilder: FormBuilder) { }
  identifiant: string; motDePasse: string;
  loginForm: FormGroup;
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.formBuilder.group(
      {
        identifiant: ['', Validators.required],
        motDePasse:  ['', Validators.required]
      }
    );
  }

  login(identifiant: string, motDePasse: string) {
    this.accountService.login(identifiant, motDePasse);
  }
  onSubmitFormToLogin() {
    const formValue = this.loginForm.value;
    const newLogin = new Login(
      formValue.identifiant,
      formValue.motDePasse
    );
    this.accountService.login(newLogin.identifiant, newLogin.motDePasse);

  }
}
