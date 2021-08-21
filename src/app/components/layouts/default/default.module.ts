import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';

import { RouterModule } from '@angular/router';
import {FriendsComponent} from "../../friends/friends.component";
import {GamesComponent} from "../../games/games.component";
import {ProfileComponent} from "../../profile/profile.component";
import {LibraryComponent} from "../../library/library.component";
import {SharedModule} from "../../../shared/shared.module";


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
  ]
})
export class DefaultModule { }
