import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
  	private angularFireAuth:AngularFireAuth,
  	private router:Router,
  	) { }

  getAuth(){
  	return this.angularFireAuth.authState;
  }
  signInWithFacebook(){
  	return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  signInWithGoogle(){
  	return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
  	return this.angularFireAuth.auth.signOut();
  }

}
