import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firebase: LoginService
  ) {
    this.usuario = new Usuario(firebase, router);
  }

  ngOnInit() {

  }



  async onLogin() {
    const {email, password} = this.loginForm.value;

    this.usuario.email = email;
    this.usuario.password = password;

    this.usuario.Login();
  }


}
