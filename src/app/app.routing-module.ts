import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GamesComponent } from './components/games/games.component';
import { LibraryComponent } from './components/library/library.component';
import { FriendsComponent } from './components/friends/friends.component';
import {DefaultComponent} from "./components/layouts/default/default.component";
import {FullscreenModule} from "./components/layouts/fullscreen/fullscreen.module";
import {FullscreenComponent} from "./components/layouts/fullscreen/fullscreen.component";

const appRoutes:Routes=[
  {
    path: 'auth',
    component: FullscreenComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent,
      }
    ],
  },
  {
    path: 'user',
    component: DefaultComponent,
    children: [{
      path: 'games',
      component: GamesComponent
    }, {
      path: 'profile',
      component: ProfileComponent
    }, {
      path: 'library',
      component: LibraryComponent
    }, {
      path: 'friends',
      component: FriendsComponent
    }],
  },
  {
    path: '',
  }

]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {

}

export const routingComponents=[LoginFormComponent,
  ProfileComponent,
  GamesComponent,
  LoginFormComponent,
  FriendsComponent]
