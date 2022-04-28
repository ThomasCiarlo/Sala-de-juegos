import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  numero = this.random('1','9')
  Imagen = '/assets/img/mayorOmenor/' + this.numero  + '.PNG';
  gano = false;
  perdio = false;

  constructor() { }

  ngOnInit(): void {
  }


  random(min: string, max: string) {
    return Math.floor((Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min));
  }

  mayor()
  {
    const x = this.random('1','9');

    if(this.numero < x)
    {
      console.log("Ganaste"); 
      this.numero = x;
      this.perdio = false;
      this.gano = true;
    }
    else
    {
      console.log("Perdiste");
      this.numero = x;
      this.perdio = true;
      this.gano = false;
    }

    this.Imagen = '/assets/img/mayorOmenor/' + this.numero  + '.PNG';

  }

  menor()
  {
    const x = this.random('1','9');

    if(this.numero > x)
    {
      console.log("Ganaste"); 
      this.numero = x;
      this.perdio = false;
      this.gano = true;
    }
    else
    {
      console.log("Perdiste");
      this.numero = x;
      this.perdio = true;
      this.gano = false;
    }

    this.Imagen = '/assets/img/mayorOmenor/' + this.numero  + '.PNG';
  }


}
