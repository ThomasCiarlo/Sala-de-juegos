import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DosfotosService {

  public ListaPalabraFoto = 
  [
    {PALABRA: 'AVION',FOTOS: ['AVION1.PNG','AVION2.PNG'],LETRAS: ['A','G','V','N','I','S','F','O','N']},
    {PALABRA: 'AUTO',FOTOS: ['AUTO1.PNG','AUTO2.PNG'],LETRAS: ['A','G','V','U','I','T','F','O','N']}
  ]


  constructor() { }


}
