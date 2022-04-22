import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

export class Usuario {

    email: string = '';
    password: string = '';

    constructor(private firebase: LoginService, private router: Router)
    {
    }

    registro(){
        const lblError = document.getElementById("error");
        if(lblError != null)
        
        this.firebase.registrar(this.email,this.password)
        .then((res) => {
          this.Login()
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
        // const login = document.getElementById("login");
        // const regis = document.getElementById("Registrarse");
        // const desc = document.getElementById("desconectar");
        // if(login != null)
        //   login.style.display = 'none';
        // if(regis != null)  
        //   regis.style.display = 'none';
        // if(desc != null)
        //  desc.style.display = 'block';
      }

}
