import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  usuarioConectado$: Observable<any> = this.firebase.afAuth.user;
  estaLogeado: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router, private firebase: LoginService) 
    {
      
    }

  ngOnInit(): void {
    this.usuarioConectado$.subscribe(usuario => {
      this.estaLogeado = (usuario) ? true : false;
      console.log(this.estaLogeado);
    })
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
  }


}
