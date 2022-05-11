import { Injectable } from '@angular/core';
import { first, observable, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public afAuth: AngularFireAuth) { }

   login(email: string, password: string) {
    return new Promise((resolve,reject) => {
      this.afAuth.signInWithEmailAndPassword(email,password)
      .then(userdate => resolve(userdate),
      err => reject(err));
    });
  }

  registrar(email: string, password: string)
  {
    return new Promise((resolve,reject) => {
    this.afAuth.createUserWithEmailAndPassword(email,password)
    .then(userdate => resolve(userdate),
    err => reject(err));
    });
  }

  public async singOut(){
    const user = this.afAuth.signOut();
    return this.Logueado;
  }

  async Logueado() {
    return this.afAuth.authState;
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
