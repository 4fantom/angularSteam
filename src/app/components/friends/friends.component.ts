import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  usersArr: any=[]
  friendsArr: any=[]
  constructor(private service: UsersService) {

  }

  ngOnInit(): void {
    this.initFriends();
  }

  private initFriends(){
    this.service.getUsers().subscribe(res => {
      let friendsIds=JSON.parse(localStorage.getItem('friendIds'));
      let friends = []
      res.forEach(doc => {
        if(friendsIds.includes(doc.payload.val().id)){
          friends.push(doc.payload.val());
        }
      });
      this.friendsArr=friends;
    })
  }

  removeFriend(){
    alert('remove friend')
  }
}
