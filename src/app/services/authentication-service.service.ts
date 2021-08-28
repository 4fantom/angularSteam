import {Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from "@angular/fire/auth"
import {BehaviorSubject, Observable} from "rxjs";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {first} from "rxjs/operators";

@Injectable()
export class AuthService implements OnInit{
  users: Observable<any>[];

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    afDb: AngularFireDatabase,
  ) {
    this.initUsers(afDb);
  }

  ngOnInit(): void {

  }

  signUp(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('successfully signed up!', res);
      })
      .catch(error => {
        console.log('User is already exists');
      });
  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Login is successful!');
        this.router.navigateByUrl('/profile');
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }

  saveUserInfo(info){
    console.log(info.toString())
    //const usersRef: AngularFireList<any> = this.afDb.list('users');
    //   usersRef.update('1', { username: 'newSize' });
  }

  private initUsers(afDb) {
    const usersRef: AngularFireList<any> = afDb.list('users');
    usersRef.valueChanges().subscribe(
      data => {
        this.users = data;
        data.forEach(user=>{
          this.signUp(user.email, user.password);
        })
      }
    )
  }

}

