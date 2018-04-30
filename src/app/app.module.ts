import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';

export const firebaseConfig = {
    apiKey: "AIzaSyDJskMtPwsXKN3Ncvps7kwap2Eo2LjcDC4",
    authDomain: "fir-cae.firebaseapp.com",
    databaseURL: "https://fir-cae.firebaseio.com",
    projectId: "fir-cae",
    storageBucket: "fir-cae.appspot.com",
    messagingSenderId: "279449650709"

}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}
