import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { NavComponent } from './components/nav/nav/nav.component';
import { MyLifeComponent } from './components/myLife/my-life/my-life.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './Errores/notfound/notfound.component';
import { JuegosComponent } from './components/Juegos/juegos/juegos.component';
import { LoginComponent } from './components/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    MyLifeComponent,
    NotfoundComponent,
    JuegosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  
 }
