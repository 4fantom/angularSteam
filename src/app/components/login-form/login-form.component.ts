import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from "../../services/authentication-service.service";
import {UsersService} from "../../services/users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  usersArr: any
  loginForm: FormGroup;
  submitted: Boolean = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private service: UsersService,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.service.getUsers().subscribe(res => {
      let users = []
      res.forEach(doc => {
        users.push(doc.payload.val())
      });
      this.usersArr = users;
      this.storeUser(JSON.parse(localStorage.getItem('user')).email)
    })
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.submitted = true;
      this.storeUser(this.loginForm.value.email);
      this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
      this.router.navigate(['/user/profile'])
    } else {
      alert('wrong input');
    }
  }

  private storeUser(email) {
    this.usersArr.forEach(user => {
      if (user.email === email) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('friendIds', JSON.stringify(user.friendsId));
      }
    })
  }

}
