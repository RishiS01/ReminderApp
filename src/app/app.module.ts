import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/edit/edit.component';
import { TrashComponent } from './components/trash/trash.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthService } from './services/auth.service';
import { NoteService } from './services/note.service';
import { AuthGuard } from './guards/auth.guard';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as _ from 'lodash'; 

export const firebaseCongfig ={
    apiKey: "AIzaSyBbkw2JfHrerFtqdRsYp6HaI7bR-26sVvo",
    authDomain: "reminder-app-40b59.firebaseapp.com",
    databaseURL: "https://reminder-app-40b59.firebaseio.com",
    projectId: "reminder-app-40b59",
    storageBucket: "reminder-app-40b59.appspot.com",
    messagingSenderId: "921337961427"
}
const appRoutes:Routes=[
  { path:'',component:HomeComponent,canActivate:[AuthGuard]},
  { path:'login',component:LoginComponent},
  { path:'edit-note/:id',component:EditComponent,canActivate:[AuthGuard]},
  { path:'trash',component:TrashComponent,canActivate:[AuthGuard]},
  

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EditComponent,
    TrashComponent,
    NavbarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseCongfig),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule,
    TagInputModule,
    BrowserAnimationsModule
    

  ],
  providers: [
    AuthService,
    NoteService,
    AngularFireModule,
    AngularFireAuth,
    AngularFireDatabase,
    AuthGuard,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
