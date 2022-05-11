import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { LoginService } from '../login.service';
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 
import { Usuario } from 'src/app/Entidades/usuario';
import { JugadoresService } from '../jugadores.service';

@Injectable({
  providedIn: 'root'
})


export class EncuestaService {

  constructor( public db: AngularFirestore, private serviceFirebaseLogin: LoginService, public jugadoresService: JugadoresService) { }


  subirEncuesta(encuesta: string) {
    this.serviceFirebaseLogin.getCurrentUser()
    .then(data => { return data?.email })
    .then((email) => {
      if(email != null)
        return this.crearEncuesta(email,encuesta);
    });
  }


  crearEncuesta(email: string, encuesta: string) {
    this.db.collection('encuestas').doc(this.db.createId()).set({
      email: email,
      encuesta: encuesta
    })
  }

}
