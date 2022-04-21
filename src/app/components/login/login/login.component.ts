import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
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
      this.usuario = new Usuario(firebase,router);
  }

  ngOnInit() {
  }

  async onLogin(){
    this.usuario.email = this.email;
    this.usuario.password = this.password;

    this.usuario.Login();
  }


}
