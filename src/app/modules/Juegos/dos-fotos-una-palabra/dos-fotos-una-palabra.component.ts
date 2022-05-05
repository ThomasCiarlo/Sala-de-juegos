import { Component, ElementRef, OnInit, Renderer2, QueryList, ViewChildren } from '@angular/core';
import { DosfotosService } from 'src/app/service/DosFotos/dosfotos.service';

@Component({
  selector: 'app-dos-fotos-una-palabra',
  templateUrl: './dos-fotos-una-palabra.component.html',
  styleUrls: ['./dos-fotos-una-palabra.component.css']
})
export class DosFotosUnaPalabraComponent implements OnInit {
  randon = 0;
  @ViewChildren('label') label!: QueryList<ElementRef>;

  constructor(public fotosService: DosfotosService, private render2: Renderer2) {

    this.randon = this.random('0', (this.fotosService.ListaPalabraFoto.length - 1).toString())
  }

  ngOnInit(): void {
  }

  random(min: string, max: string) {
    return Math.floor((Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min));
  }

  eventClickBuscarLetra($event: any) {

    let estaLetra = false;

    this.label.map(function (i) {
      if (i.nativeElement.id == $event.currentTarget.innerText) {
        i.nativeElement.style.color = 'white';
        i.nativeElement.innerText = $event.currentTarget.innerText;
      }
    })

    this.eventVerificarSiGano();

  }


  eventVerificarSiGano() {
    let gano = true;
    let j = 0;

    this.label.map(function (i) {
      if (i.nativeElement.innerText == "")
        gano = false;
    })

    if (gano) {
      this.label.map(function (i) {
        i.nativeElement.style.color = 'green';
      })

    window.location.reload();

    }

  }
}
