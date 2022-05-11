import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/service/jugadores.service';
import { PreguntadosService } from 'src/app/service/Preguntados/preguntados.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css'],
})
export class PreguntadosComponent implements OnInit {

  num: number;
  Pregunta: string;
  respuestas: string[];
  correcta: string;
  estado = '';
  mostrarSpinner = false;

  constructor(public preguntasService: PreguntadosService, public serviceJugadores: JugadoresService) {
    this.serviceJugadores.inicializarDatosUsuarioConectado();

    this.num = this.random('0', preguntasService.Preguntas.length.toString());
    this.Pregunta = preguntasService.Preguntas[this.num].PREGUNTA
    this.respuestas = preguntasService.Preguntas[this.num].RESPUESTA
    this.correcta = preguntasService.Preguntas[this.num].Correcta
  }

  ngOnInit(): void {
  }

  random(min: string, max: string) {
    return Math.floor((Math.random() * (parseInt(max) - parseInt(min) - 1)) + parseInt(min));
  }

  PreguntaAlazar() {
    this.estado = '';
    this.num = this.random('0', this.preguntasService.Preguntas.length.toString());;
    this.Pregunta = this.preguntasService.Preguntas[this.num].PREGUNTA
    this.respuestas = this.preguntasService.Preguntas[this.num].RESPUESTA
    this.correcta = this.preguntasService.Preguntas[this.num].Correcta
  }

  probarSuerte($event: any) {
    if (this.correcta == $event.currentTarget.innerText) {
      this.estado = 'CORRECTO';
      this.serviceJugadores.gano();
      this.serviceJugadores.updatePlayer();
      this.mostrarSpinner = true;

      setTimeout( () => {
        this.mostrarSpinner = false;
        this.PreguntaAlazar();
      }, 3000);

    }
    else {
      this.estado = 'INCORRECTO';

      this.serviceJugadores.perdio();
      this.serviceJugadores.updatePlayer();
      this.mostrarSpinner = true;

      setTimeout( () => {
        this.mostrarSpinner = false;
        this.PreguntaAlazar();
      }, 3000);
    }
  }

}
