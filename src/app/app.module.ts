import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/Http';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './core/auth.guard';
import { AppRoutingModule } from './app-routing/app-routing.module';

  var firebaseConfig = {
    apiKey: "AIzaSyC88zWMlF1Bnc8BDq78eK0POX7WsfAADPk",
    authDomain: "firestore-cebf3.firebaseapp.com",
    databaseURL: "https://firestore-cebf3.firebaseio.com",
    projectId: "firestore-cebf3",
    storageBucket: "",
    messagingSenderId: "893924460333"
  };


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    CoreModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
