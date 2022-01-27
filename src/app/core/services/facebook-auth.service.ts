import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FacebookAuthService {
  static getUserName() {
    throw new Error('Method not implemented.');
  }
  //const provider = new FacebookAuthProvider();

  // eslint-disable-next-line max-len
  constructor(public afAuth: AngularFireAuth, private router: Router) {}
  user!: firebase.User | null;

  // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  FacebookOut() {
    return this.AuthLogout();
  }

  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('connecter');
        this.router.navigateByUrl('/festival/listeFestival');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  Auth2() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // This gives you a Facebook Access Token.
        //var token = result.credential.accessToken;
        // The signed-in user info.
        this.user = result.user;
        console.log(this.user?.uid);
        console.log(this.user?.displayName);
        this.router.navigateByUrl('/festival/listeFestival');
      });
  }

  AuthLogout() {
    return this.afAuth
      .signOut()
      .then((result) => {
        console.log('deconnecter');
        this.router.navigateByUrl('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //etUserName(provider: firebase.auth.FacebookAuthProvider) {
  //return Auth2(provider).this.user?.displayName;
  //return this.user?.displayName;
  //}
}
