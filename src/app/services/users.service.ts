import {Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';

import {AngularFirestore} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth"
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";

@Injectable()
export class UsersService {

  constructor(private afDb: AngularFireDatabase) { }

  getUsers() {
    const gamesRef: AngularFireList<any> = this.afDb.list('users')
    return gamesRef.snapshotChanges();
  }
}
