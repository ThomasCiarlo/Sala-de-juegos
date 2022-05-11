import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { LoginService } from './login.service';
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 
import { Usuario } from '../Entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  listaTodosLosJugadores?: Usuario[] = [];
  datosJugadorConectado?: Usuario;
  emailJugadorConectado?: string = '';

  constructor( public db: AngularFirestore, private serviceFirebaseLogin: LoginService) { }

  inicializarDatosUsuarioConectado(){
    this.serviceFirebaseLogin.getCurrentUser()
      .then(data => { return data?.email })
      .then((email) => {
        if(email != null)
          return this.ObtenerUsuarioConectadoYSusDatos(email);
      });
  }

  getAllPlayers(): Observable<Usuario[]> {
    return this.db.collection('jugadores')
      .snapshotChanges()
      .pipe(map(snaps => {
        return snaps.map(snap => {
          return <Usuario>{
            id: snap.payload.doc.id,
            ...snap.payload.doc.data() as any
          }
        })
      }));
  }

  ObtenerUsuarioConectadoYSusDatos(email: string) {
    this.getAllPlayers().subscribe((data: Usuario[]) => {
      let aux = data.find(jugadorIterado => jugadorIterado.email === email);
      // console.log(aux);
      if (aux) {
        // console.log('jugador existente');
        this.datosJugadorConectado = aux;
      }
      else {
        console.log('Creando nuevo jugador');
        this.createPlayer(email);
      }
    });
  }

  gano() {
    // console.log(`Antes de Gano->${this.datosJugadorConectado.email}`, this.datosJugadorConectado.gano);
    if(this.datosJugadorConectado != null)
       this.datosJugadorConectado.gano++;
    // console.log(`Desp de Gano->${this.datosJugadorConectado.email}`, this.datosJugadorConectado.gano);
  }

  perdio() {
    if(this.datosJugadorConectado != null)
      this.datosJugadorConectado.perdio++;
  }

  updatePlayer() {
    this.db.collection('jugadores').doc(this.datosJugadorConectado?.id).set(this.datosJugadorConectado);
    // console.log('desde update->',this.datosJugadorConectado.id);
  }

  createPlayer(email: string) {
    this.db.collection('jugadores').doc(this.db.createId()).set({
      email: email,
      gano: 0,
      perdio: 0
    })
  }

}
