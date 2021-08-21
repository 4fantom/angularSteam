import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from "./app.routing-module";
import { AngularFireModule } from '@angular/fire';
import {DefaultModule} from "./components/layouts/default/default.module";
import {FullscreenModule} from "./components/layouts/fullscreen/fullscreen.module";
import { environment } from 'src/environments/environment';


import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms'
import {AuthService} from "./services/authentication-service.service";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DefaultModule,
    FullscreenModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]

})
export class AppModule { }

