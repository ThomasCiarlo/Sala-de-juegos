import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  
  palabraElegida : string;

  palabrasJuego = ['casa', 'pescado', 'calamar', 'monigote', 'codigo','elefante'];  
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  VidaImagen = '/assets/img/vidaAhorcado/0.PNG'
  intentos = 1;
  perdio = false;

  constructor() 
  {
    this.palabraElegida = '';
  }

  ngOnInit(): void {
    this.palabraElegida = this.palabrasJuego[this.random('0',this.palabrasJuego.length.toString())]
    this.incializarPalabra();
  }

  random(min: string, max: string) {
    return Math.floor((Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min));
  }


  crearLetras() {

    const divPrincipal = document.getElementById("principal");
    const div = document.createElement('div');
    div.className = "container d-flex justify-content-center";

    for (let index = 0; index < this.letras.length; index++) {
      
      const button = document.createElement('button');
      button.type = 'button';
      button.innerText = this.letras[index];
      button.value =  this.letras[index];
      button.style.borderRadius= '100px';
      button.style.margin = '5px';
      button.style.height = '50px';
      button.addEventListener("click",this.eventBuscarLetra);

      div.className = 'd-flex column justify-content-center';
      div.style.display = 'flex';
      div.appendChild(button); 
      
    }
      if(divPrincipal != null)
      {
        divPrincipal.appendChild(div);
      }
  }

  incializarPalabra()
  {

    const divPrincipal = document.getElementById("palabra");

    for (let index = 0; index < this.palabraElegida.length; index++) {

      const div = document.createElement('div');
      div.className = ' d-flex row justify-content-center'

      const input = document.createElement('label');
      input.style.width = '50px';
      input.style.fontSize = '30px';
      input.style.marginRight = '30px';
      input.style.border = 'none';
      input.style.borderBottom = '3px solid black';
      input.style.background = '#B39C4D';
      input.id = index.toString();

      div.appendChild(input);
      divPrincipal?.appendChild(div);   
    }

  }

  GameOver()
  {
    window.location.reload();
  }

  eventBuscarLetra($event: any)
  {
    let letraNoEsta = true;
    for (let index = 0; index < this.palabraElegida.length; index++) {
      
      if(this.palabraElegida[index].toUpperCase() == $event.currentTarget.innerText){
        $event.currentTarget.style.background = 'green';
        let input = document.getElementById(index.toString());
        if(input != null){
          input.innerText = $event.currentTarget.innerText;
          letraNoEsta = false;
        }
      }          
   }
    if(letraNoEsta)
    {
      $event.currentTarget.style.background = 'red';
      this.VidaImagen = '/assets/img/vidaAhorcado/'+ this.intentos + '.PNG';
      this.intentos++;
      if(this.intentos == 7)
      {
        this.perdio = true;
      }
    }

  }

}
