import {Component, OnInit} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {AuthService} from "../../services/authentication-service.service";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Observable, Subscription} from "rxjs";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted: Boolean= false;

  private subscriptions: Subscription[] = [];

    constructor(private fb: FormBuilder,
              private authService: AuthService,
              private usersService: UsersService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required ],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.submitted=true;
      console.log('value', this.loginForm.value)
      this.storeUser(this.loginForm.value.email);
      this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
    } else{
      alert('wrong input');
    }
  }

  private storeUser(email) {
    const usersSub = this.usersService.usersArr
      .subscribe((users) => {
          users.forEach(user => {
            if (user.email === email) {
              localStorage.setItem('user', JSON.stringify(user))
              console.log('stored')
            }
          })
        }
      );
    this.subscriptions.push(usersSub);
  }

  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }

}
