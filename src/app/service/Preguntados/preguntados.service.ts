import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {

  Preguntas = [
    { Genero: 'HISTORIA', PREGUNTA: '¿De que color era el caballo de San Martin?', Correcta: 'BLANCO', RESPUESTA: ['NEGRO', 'AZUL','BLANCO'] },
    { Genero: 'DEPORTE', PREGUNTA: '¿DE QUE NACIONALIDAD ES MESSI?', Correcta: 'ARGENTINO', RESPUESTA: ['BRASIL', 'ESPAÑA','ARGENTINO'] },
    { Genero: 'MUSICA', PREGUNTA: '¿QUIEN ES DUKI?', Correcta: 'CANTANTE', RESPUESTA: ['CANTANTE', 'BAILARIN','PINTOR'] },
    { Genero: 'GEOGRAFIA', PREGUNTA: '¿CAPITAL DE BUENOS AIRES?', Correcta: 'LA PLATA', RESPUESTA: ['LA PLATA', 'AVELLANEDA','QUILMES'] }
  ]

  constructor() { }
}
