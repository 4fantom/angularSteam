import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  gamesArr: any
  libraryArr: any
  constructor(private service: GamesService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.service.getGames().subscribe(res => {
    let games = []
    res.forEach(doc => {
      games.push(doc.payload.val())
    });
    this.gamesArr = games;
    this.libraryArr = this.getLibraryArr();
  })}

  download(){
    alert('downloading game')
  }

  share(){
    alert('share game')
  }

  private getLibraryArr() {
    let currentLibraryIds=JSON.parse(localStorage.getItem('library'))||[];
    if(!currentLibraryIds.length){
      return [];
    } else{
      return this.gamesArr.filter(game=>{
        if(currentLibraryIds.indexOf(game.id)!==-1){
          return game;
        }
      })
    }
  }
}
