import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {GamesService} from "../../services/games.service";
import {MatSlider, MatSliderChange} from "@angular/material/slider";
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  gamesArr: any
  gamesArrFiltered: any
  indieChecked: boolean = false;
  actionChecked: boolean = false;
  adventureChecked: boolean = false;
  currentSliderValue: number = 400;
  firstSliderValue: number = 400;
  gameForm: FormGroup;
  inputValue: String

  constructor(private service: GamesService,
              private firestore: AngularFirestore,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.service.getGames().subscribe(res => {
      let games = []
      res.forEach(doc => {
        games.push(doc.payload.val())
      });
      games = this.filterLibraryGames(games);
      this.gamesArr = games;
      this.gamesArrFiltered = this.gamesArr;
      console.log('tadaa', this.gamesArrFiltered)
    })
  }

  createForm() {
    this.gameForm = this.fb.group({
      searchInput: ['']
    });
  }

  searchGame() {
    if (!this.gameForm.value.searchInput.length) {
      this.gamesArrFiltered = this.filterLibraryGames(this.gamesArr);
    } else {
      let result = this.gamesArr.filter(game => {
        if (game.title.toLowerCase().includes(this.gameForm.value.searchInput)) {
          return game;
        }
      })
      this.gamesArrFiltered = this.filterLibraryGames(result);
    }
   this.inputValue='';
  }

  filterLibraryGames(games) {
    let currentLibraryIds = JSON.parse(localStorage.getItem('library'));
    if (!currentLibraryIds) {
      return games;
    } else {
      return games.filter(game => {
        if (currentLibraryIds.indexOf(game.id) === -1) {
          return game;
        }
      })
    }
  }

  addToLibrary(gameId) {
    let currentLibraryIds = [];
    if (localStorage.getItem('library')) {
      currentLibraryIds = JSON.parse(localStorage.getItem('library'));
    } else {
      currentLibraryIds = []
    }
    currentLibraryIds.push(gameId);
    localStorage.setItem('library', JSON.stringify(currentLibraryIds));
    this.gamesArrFiltered = this.filterLibraryGames(this.gamesArrFiltered)
  }

  onSliderChange(event: MatSliderChange) {
    this.gameForm.value.searchInput = '';
    this.currentSliderValue = event.value;
    this.gamesArrFiltered = this.gamesArr.filter(game => {
      if (game.price < event.value) return game;
    })
    this.indieChecked = false;
    this.actionChecked = false;
    this.adventureChecked = false;
  }

  formatThumbLabel(value: number) {
    return value;
  }

  checkBox(tagValue) {
    this.gameForm.value.searchInput = '';
    switch (tagValue) {
      case 'indie':
        this.indieChecked = !this.indieChecked;
        this.actionChecked = this.indieChecked ? false : this.actionChecked;
        this.adventureChecked = this.indieChecked ? false : this.adventureChecked;
        break;
      case 'action':
        this.actionChecked = !this.actionChecked;
        this.indieChecked = this.actionChecked ? false : this.indieChecked;
        this.adventureChecked = this.actionChecked ? false : this.adventureChecked;
        break;
      case 'adventure':
        this.adventureChecked = !this.adventureChecked;
        this.indieChecked = this.adventureChecked ? false : this.indieChecked;
        this.actionChecked = this.adventureChecked ? false : this.actionChecked;
        break;
      default:
        console.log('checked')
    }
    if (!this.indieChecked && !this.actionChecked && !this.adventureChecked) {
      this.gamesArrFiltered = this.filterLibraryGames(this.gamesArr);
      return;
    } else {
      this.gamesArrFiltered = this.gamesArr.filter(game =>
        game.tag === tagValue
      )
    }
  }
}
