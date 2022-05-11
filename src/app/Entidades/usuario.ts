import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

export class Usuario {

    email: string = '';
    password: string = '';
    gano: number = 0;
    perdio: number = 0;
    id: string = '';
    encuesta?: string;

    constructor(private firebase: LoginService, private router: Router)
    {
    }

    registro(){
        const lblError = document.getElementById("error");
        if(lblError != null)
        
        this.firebase.registrar(this.email,this.password)
        .then((res) => {
          this.Login();
          this.redirigirLogin();
        }).catch(err => 
          lblError.textContent = err.message)
      }
      
      Login(){
        const errorlbl = document.getElementById("errorLogin");
        if(errorlbl != null)

        this.firebase.login(this.email,this.password)
        .then((res) => {
            this.redirigirLogin()
        }).catch(err =>
            errorlbl.textContent = err.message)
      }

      redirigirLogin()
      {
        this.router.navigate(['/juegos']);
      }

}
