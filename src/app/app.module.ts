import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from "./app.routing-module";
import { AngularFireModule } from '@angular/fire';
import {DefaultModule} from "./components/layouts/default/default.module";
import {FullscreenModule} from "./components/layouts/fullscreen/fullscreen.module";
import { AngularFireAuthModule } from '@angular/fire/auth';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms'
import {AuthService} from "./services/authentication-service.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSliderModule} from "@angular/material/slider";



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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule

  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]

})
export class AppModule {

}

