import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from './default.component';
import {RouterModule} from '@angular/router';
import {FriendsComponent} from "../../friends/friends.component";
import {GamesComponent} from "../../games/games.component";
import {ProfileComponent} from "../../profile/profile.component";
import {LibraryComponent} from "../../library/library.component";
import {SharedModule} from "../../../shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSliderModule} from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    FriendsComponent,
    GamesComponent,
    ProfileComponent,
    LibraryComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule {
}
