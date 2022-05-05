import {  Component, OnInit } from '@angular/core';
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

  constructor(public preguntasService: PreguntadosService) 
  {  
    this.num = this.random('0',preguntasService.Preguntas.length.toString());
    this.Pregunta = preguntasService.Preguntas[this.num].PREGUNTA
    this.respuestas =  preguntasService.Preguntas[this.num].RESPUESTA
    this.correcta =  preguntasService.Preguntas[this.num].Correcta
  }

  ngOnInit(): void {
  }

  random(min: string, max: string) {
    return Math.floor((Math.random() * (parseInt(max) - parseInt(min) - 1)) + parseInt(min));
  }

  PreguntaAlazar()
  {
    this.num = this.random('0',this.preguntasService.Preguntas.length.toString());;
    this.Pregunta = this.preguntasService.Preguntas[this.num].PREGUNTA
    this.respuestas = this.preguntasService.Preguntas[this.num].RESPUESTA
    this.correcta =  this.preguntasService.Preguntas[this.num].Correcta
  }

  probarSuerte($event: any)
  {
      if(this.correcta == $event.currentTarget.innerText)
        this.estado = 'CORRECTO';
        else
        this.estado = 'INCORRECTO';
  }

}
