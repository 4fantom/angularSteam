import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private afDb: AngularFireDatabase) { }

  getGames() {
    const gamesRef: AngularFireList<any> = this.afDb.list('games')
    return gamesRef.snapshotChanges();
  }
}
