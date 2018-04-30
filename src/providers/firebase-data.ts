import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import firebase from 'firebase';

@Injectable()
export class FirebaseData {

  private urlBase = "https://fir-cae.firebaseio.com/";
  constructor(public af: AngularFire) { }

   
}
