import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {LoginFormComponent} from "../../login-form/login-form.component";
import {SharedModule} from "../../../shared/shared.module";
import {FullscreenComponent} from "./fullscreen.component";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms'
import {AuthService} from "../../../services/authentication-service.service";
import {UsersService} from "../../../services/users.service";

@NgModule({
  declarations: [
    FullscreenComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ UsersService ],
})

export class FullscreenModule { }
