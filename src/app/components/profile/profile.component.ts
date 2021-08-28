import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AuthService } from "../../services/authentication-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor( private authService: AuthService  ) {

  }

  getUsername(){
    if (localStorage.getItem('user') !== null) {
      let user=JSON.parse(localStorage.getItem('user'));
      return user.username;
    } else{
      return ''
    }
  }
  getAge(){
    if (localStorage.getItem('user') !== null) {
      let user=JSON.parse(localStorage.getItem('user'));
      return user.age;
    } else{
      return ''
    }
  }
  getEmail(){
    if (localStorage.getItem('user') !== null) {
      let user=JSON.parse(localStorage.getItem('user'));
      return user.email;
    } else{
      return ''
    }
  }

  saveInfo(){
    console.log('save')
    this.authService.saveUserInfo({sd:'sd'})
  }
  ngOnInit(): void {
  }

}
