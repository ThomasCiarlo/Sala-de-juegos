import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  usuario: Usuario;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private firebase: LoginService, private router: Router) 
  {
      this.usuario = new Usuario(firebase, router)
  }

  ngOnInit(): void {
  }

  registro(){
    this.usuario.email = this.email;
    this.usuario.password = this.password

    this.usuario.registro();
  }

}
