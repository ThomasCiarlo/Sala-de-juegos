import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';
import { AhorcadoComponent } from '../ahorcado/ahorcado.component';
import { MayorMenorComponent } from '../mayor-menor/mayor-menor.component';

const routes: Routes = 
[
  {path: '', component: JuegosComponent},
  {path: 'juegos/ahorcado', component: AhorcadoComponent},
  {path: 'juegos/MayorMenor', component: MayorMenorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
