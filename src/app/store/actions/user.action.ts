import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export enum UserActionTypes {
    LOGIN = '[USER] LOGIN',
    LOGIN_SUCCESFULLY = '[USER] LOGIN SUCCESFULLY',
    SIGNUP = '[USER] SIGNUP',
    SIGNUP_SUCCESFULLY = '[USER] SIGNUP SUCCESFULLY',
    GET_AUTHENTICATED_USER = '[USER] GET AUTHENTICATED USER',
    GET_AUTHENTICATED_USER_SUCCESS = '[USER] GET AUTHENTICATED USER SUCCESS',
    LOGOUT = '[USER] LOGOUT',
    LOGOUT_SUCCESS = '[USER] LOGOUT SUCCESS',
    REFRESH_TOKEN = '[USER] REFRESH TOKEN',
    REFRESH_TOKEN_SUCCESS = '[USER] REFRESH TOKEN SUCCESS',
    AUTH_FAILURE = '[USER] AUTH FAILURE',
    USER_ACTION_FAILURE = '[USER] USER ACTION FAILURE'
}

export class login implements Action {
    readonly type = UserActionTypes.LOGIN;

    constructor(public payload:any){}
}

export class loginSuccess implements Action {
    readonly type = UserActionTypes.LOGIN_SUCCESFULLY;

    constructor(public payload:User){}
}

export class getAuthenticatedUser implements Action {
    readonly type = UserActionTypes.GET_AUTHENTICATED_USER;
}

export class getAuthenticatedUserSuccess implements Action {
    readonly type = UserActionTypes.GET_AUTHENTICATED_USER_SUCCESS;

    constructor(public payload:User){}
}

export class authFailure implements Action {
    readonly type = UserActionTypes.AUTH_FAILURE;

    constructor(public payload:Error){}
}


export class logout implements Action {
    readonly type = UserActionTypes.LOGOUT;
}

export class logoutSuccess implements Action {
    readonly type = UserActionTypes.LOGOUT_SUCCESS;
}

export class refreshToken implements Action {
    readonly type = UserActionTypes.REFRESH_TOKEN;
}

export class refreshTokenSuccess implements Action {
    readonly type = UserActionTypes.REFRESH_TOKEN_SUCCESS

    constructor(public payload:User){}
}

export type UserAction = login | loginSuccess |
                        getAuthenticatedUser | getAuthenticatedUserSuccess |
                        refreshToken | refreshTokenSuccess |
                        logout | logoutSuccess |
                        authFailure 