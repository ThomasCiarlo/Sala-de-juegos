import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { NavComponent } from './components/nav/nav/nav.component';
import { MyLifeComponent } from './components/myLife/my-life/my-life.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './Errores/notfound/notfound.component';
import { JuegosComponent } from './components/Juegos/juegos/juegos.component';
import { LoginComponent } from './components/login/login/login.component';

import { LoginService } from './service/login.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './components/register/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    MyLifeComponent,
    NotfoundComponent,
    JuegosComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  
 }
