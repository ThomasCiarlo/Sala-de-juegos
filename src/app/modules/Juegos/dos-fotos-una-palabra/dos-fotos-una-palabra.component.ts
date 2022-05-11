import { Component, ElementRef, OnInit, Renderer2, QueryList, ViewChildren } from '@angular/core';
import { DosfotosService } from 'src/app/service/DosFotos/dosfotos.service';
import { JugadoresService } from 'src/app/service/jugadores.service';

@Component({
  selector: 'app-dos-fotos-una-palabra',
  templateUrl: './dos-fotos-una-palabra.component.html',
  styleUrls: ['./dos-fotos-una-palabra.component.css']
})
export class DosFotosUnaPalabraComponent implements OnInit {
  randon = 0;
  letrasAsiertos = 0;
  mostrarSpinner = false;
  @ViewChildren('label') label!: QueryList<ElementRef>;

  constructor(public fotosService: DosfotosService, private render2: Renderer2, public serviceJugadores: JugadoresService) {
    this.serviceJugadores.inicializarDatosUsuarioConectado();
    this.randon = this.random('0', (this.fotosService.ListaPalabraFoto.length - 1).toString())
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.serviceJugadores.updatePlayer();
    console.log('Se llamo al onDestroy');
  }

  random(min: string, max: string) {
    return Math.floor((Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min));
  }

  eventClickBuscarLetra($event: any) {

    let estaLetra = false;
    let sumoLetra = this.letrasAsiertos;

    this.label.map(function (i) {
      if (i.nativeElement.id == $event.currentTarget.innerText) {
        i.nativeElement.style.color = 'white';
        i.nativeElement.innerText = $event.currentTarget.innerText;
        sumoLetra++;
      }
    })

    this.letrasAsiertos = sumoLetra;

    if(sumoLetra == this.fotosService.ListaPalabraFoto[this.randon].PALABRA.length)
    {

        this.label.map((i) => {          
          i.nativeElement.style.color = 'green';
        })
        
        this.serviceJugadores.gano();
        this.serviceJugadores.updatePlayer();
        
        this.mostrarSpinner = true;

        setTimeout( () => {
          this.mostrarSpinner = false;
          window.location.reload();
        }, 3000);

    }

  }
}
