import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { MyLifeComponent } from './components/myLife/my-life/my-life.component';
import { NotfoundComponent } from './Errores/notfound/notfound.component';
import { JuegosComponent } from './components/Juegos/juegos/juegos.component';
import { LoginComponent } from './components/login/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent },
  {path:'mylife',component:MyLifeComponent},
  {path: 'juegos', component:JuegosComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }