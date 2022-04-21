import { Component, OnInit } from '@angular/core';
import { MyLifeComponent } from '../../myLife/my-life/my-life.component';
import { HomeComponent } from '../../home/home/home.component';
import { Route } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private firebase: LoginService) 
    {

    }

  ngOnInit(): void {
  }

  redirigir() {
    this.router.navigate(['/login']);
  }

  registrarse() {
    this.router.navigate(['/register']);
  }


  async desconectar()
  {
    const user = this.firebase.singOut();
    if(await user)
    {
      const desconectar = document.getElementById("desconectar");
      if(desconectar != null)
      desconectar.style.display = 'none';
      const login = document.getElementById("login");
      if(login != null)
        login.style.display = 'block';

      const desc = document.getElementById("Registrarse");
      if(desc != null)
        desc.style.display = 'block';
    }
  }

}
