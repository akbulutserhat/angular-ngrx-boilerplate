import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import {
  authFailure,
  getAuthenticatedUserSuccess,
  loginSuccess,
  logoutSuccess,
  refreshTokenSuccess,
  UserAction,
  UserActionTypes,
} from '../actions/user.action';

@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect() login$ = this.actions$.pipe(
    ofType<UserAction>(UserActionTypes.LOGIN),
    mergeMap((data) =>
      this.authService.login(data.payload).pipe(
        map((res) => new loginSuccess(res)),
        catchError((err) => of(new authFailure(err)))
      )
    )
  );

  @Effect() getAuthUser$ = this.actions$.pipe(
    ofType<UserAction>(UserActionTypes.GET_AUTHENTICATED_USER),
    mergeMap(() =>
      this.authService.getAuthenticatedUser().pipe(
        map((res) => new getAuthenticatedUserSuccess(res.user)),
        catchError((err) => of(new authFailure(err)))
      )
    )
  );

  @Effect() refreshToken$ = this.actions$.pipe(
    ofType<UserAction>(UserActionTypes.REFRESH_TOKEN),
    mergeMap(() =>
      this.authService.refreshToken().pipe(
        map((res) => new refreshTokenSuccess(res)),
        catchError((err) => of(new authFailure(err)))
      )
    )
  );

  @Effect() logout$ = this.actions$.pipe(
    ofType<UserAction>(UserActionTypes.LOGOUT),
    mergeMap(() =>
      this.authService.logout().pipe(
        map(() => new logoutSuccess()),
        catchError((err) => of(new authFailure(err)))
      )
    )
  );
}
