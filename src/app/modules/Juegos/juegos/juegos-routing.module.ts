import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';
import { AhorcadoComponent } from '../ahorcado/ahorcado.component';
import { MayorMenorComponent } from '../mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from '../preguntados/preguntados.component';
import { DosFotosUnaPalabraComponent } from '../dos-fotos-una-palabra/dos-fotos-una-palabra.component';

const routes: Routes = 
[
  {path: '', component: JuegosComponent},
  {path: 'juegos/ahorcado', component: AhorcadoComponent},
  {path: 'juegos/MayorMenor', component: MayorMenorComponent},
  {path: 'juegos/Preguntados', component: PreguntadosComponent},
  {path: 'juegos/DosFotosUnaPalabra', component: DosFotosUnaPalabraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
