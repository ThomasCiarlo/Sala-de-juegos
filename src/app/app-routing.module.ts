import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { MyLifeComponent } from './components/myLife/my-life/my-life.component';
import { NotfoundComponent } from './Errores/notfound/notfound.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent },
  {path:'mylife',component:MyLifeComponent},
  { path: 'juegos', loadChildren: () => import('./modules/Juegos/juegos/juegos.module').then(m => m.JuegosModule) },
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }