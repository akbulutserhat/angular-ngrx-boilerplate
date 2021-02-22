import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authHeader } from '../helpers/auth.header';
import { delay, map } from 'rxjs/operators';
import { User } from '../store/models/user.model';
import { environment } from 'src/environments/environment.prod';
import { Store } from '@ngrx/store';
import { AppState } from '../store/states/app.state';
import { refreshToken } from '../store/actions/user.action';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private store:Store<AppState>) { }

  login(body:any) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`,body).pipe(delay(500));
  }

  getAuthenticatedUser() {
    return this.http.get<any>(`${environment.apiUrl}/auth/user`,authHeader).pipe(delay(500));
  }

  logout() {
    return this.http.post<any>(`${environment.apiUrl}/auth/logout`,{}, authHeader).pipe(
      map(() => {
        this.stopRefreshTokenTimer();
      })
    );
  }

  refreshToken() {
    const refreshToken = window.localStorage.getItem('refreshToken');
    return this.http.post<any>(`${environment.apiUrl}/auth/refresh-token`,{refreshToken})
        .pipe(map((user) => {
            this.startRefreshTokenTimer(user);
            return user;
        }));
}

// helper methods

private refreshTokenTimeout:any;

private startRefreshTokenTimer(user:any) {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(user.jwtToken.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    this.refreshTokenTimeout = setTimeout(() => this.store.dispatch(new refreshToken()), timeout);
}

private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
}
}
