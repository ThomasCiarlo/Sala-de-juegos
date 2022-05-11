import { Component, ElementRef, OnInit, Renderer2, QueryList, ViewChildren } from '@angular/core';
import { JugadoresService } from 'src/app/service/jugadores.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  @ViewChildren('label') label!: QueryList<ElementRef>;
  letrasAsiertos = 0;
  mostrarSpinner = false;

  palabraElegida: string = '';
  randon = 0;
  palabrasJuego = ['casa', 'pescado', 'calamar', 'monigote', 'codigo', 'elefante'];
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  VidaImagen = '/assets/img/vidaAhorcado/0.PNG'
  intentos = 1;
  perdio = false;

  constructor(public serviceJugador: JugadoresService, private render2: Renderer2) {
    this.serviceJugador.inicializarDatosUsuarioConectado();
    this.randon = this.random('0', (this.palabrasJuego.length - 1).toString())
    this.palabraElegida = this.palabrasJuego[this.randon];
  }

  ngOnInit(): void {

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
      button.value = this.letras[index];
      button.style.borderRadius = '100px';
      button.style.margin = '5px';
      button.style.height = '50px';
      button.addEventListener("click", this.eventBuscarLetra);

      div.className = 'd-flex column justify-content-center';
      div.style.display = 'flex';
      div.appendChild(button);

    }
    if (divPrincipal != null) {
      divPrincipal.appendChild(div);
    }
  }

  eventBuscarLetra($event: any) {
    let letraNoEsta = true;
    let letrasEncontradas = this.letrasAsiertos;

    this.label.map(function (i) {
      if (i.nativeElement.id.toUpperCase() == $event.currentTarget.innerText) {
        i.nativeElement.style.color = 'white';
        i.nativeElement.innerText = $event.currentTarget.innerText;
        $event.currentTarget.style.background = 'green';
        letraNoEsta = false;
        letrasEncontradas++;
      }
    })

    this.letrasAsiertos = letrasEncontradas;

    if (letraNoEsta) {
      $event.currentTarget.style.background = 'red';
      this.VidaImagen = '/assets/img/vidaAhorcado/' + this.intentos + '.PNG';
      this.intentos++;
      if (this.intentos == 7) {

        this.serviceJugador.perdio();
        this.serviceJugador.updatePlayer();

        this.mostrarSpinner = true;
        setTimeout(() => {
          this.mostrarSpinner = false;
          window.location.reload();
        }, 2000);
        this.intentos = 0;
      }

    }

    if (this.letrasAsiertos == this.palabraElegida.length) {
      this.serviceJugador.gano();
      this.serviceJugador.updatePlayer();
      
      this.mostrarSpinner = true;

      setTimeout(() => {
        this.mostrarSpinner = false;
        window.location.reload();
      }, 2000);
    }


  }

}
