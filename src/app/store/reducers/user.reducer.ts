import { UserAction, UserActionTypes } from '../actions/user.action';
import { UserState } from '../states/user.state';


const initialState = {
    user:null!,
    user_list:[],
    loading:false,
    error:undefined!
}

export function UserReducer(state:UserState = initialState,action:UserAction){
    switch(action.type) {
        case UserActionTypes.LOGIN:
        case UserActionTypes.GET_AUTHENTICATED_USER:
        case UserActionTypes.LOGOUT:
        case UserActionTypes.REFRESH_TOKEN:
            return {
                ...state,
                loading:true
            }
        case UserActionTypes.LOGIN_SUCCESFULLY:
            window.localStorage.setItem('token',action.payload.jwtToken!);
            window.localStorage.setItem('refreshToken',action.payload.refreshToken!);
            return {
                ...state,
                user:action.payload,
                loading:false
            }
        case UserActionTypes.GET_AUTHENTICATED_USER_SUCCESS:
            return {
                ...state,
                user:action.payload,
                loading:false
            }
        case UserActionTypes.REFRESH_TOKEN_SUCCESS:
            window.localStorage.setItem('token',action.payload.jwtToken!);
            window.localStorage.setItem('refreshToken',action.payload.refreshToken!);
            return {
                ...state,
                user:action.payload,
                loading:false
            }
        case UserActionTypes.LOGOUT_SUCCESS:
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('refreshToken');
            return {
                ...state,
                user:null,
                loading:false,

            }
        case UserActionTypes.AUTH_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}