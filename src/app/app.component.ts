import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select,Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { getAuthenticatedUser, login, logout, refreshToken } from './store/actions/user.action';
import { User } from './store/models/user.model';
import { AppState } from './store/states/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-library';
  user:User | undefined;
  formItem:any = {email:'',password:''}

  constructor(private store:Store<AppState>,private authService:AuthService){
    this.store.pipe(select(state => state.user.user))
    .subscribe(state => this.user = state)
    
  }

  login(form:NgForm) {
    this.store.dispatch(new login(this.formItem));
  }

  ngOnInit() {
    this.store.dispatch(new refreshToken());
    this.store.dispatch(new getAuthenticatedUser());
  }

  logout() {
    this.store.dispatch(new logout());
  }

}
