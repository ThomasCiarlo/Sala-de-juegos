import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../nav/nav/nav.component';
import { LoginService } from 'src/app/service/login.service';
import { Usuario } from 'src/app/Entidades/usuario';
import { LoginComponent } from '../../login/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
