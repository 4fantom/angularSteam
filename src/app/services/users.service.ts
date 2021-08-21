import {Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';

import {AngularFirestore} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth"
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";

@Injectable()
export class UsersService  {
  usersArr: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(
    private afAuth: AngularFireAuth,
    afDb: AngularFireDatabase,
    ) {
    const usersRef: AngularFireList<any> = afDb.list('users')
    usersRef.valueChanges().subscribe(
      users => {
        let usersArr=[]
        users.forEach(user=>{
          const email=user.email;
          const username=user.username;
          usersArr.push({
            email: email,
            username: username,
          })
        })
      }
    )
    usersRef.snapshotChanges().subscribe(res => {
      let users=[]
      res.forEach(doc => {
        users.push(doc.payload.val())
      });
      this.setUsers(users);
    });
  }

  setUsers(users) {
    this.usersArr.next(users);
  }
}
