import { User } from '../models/user.model';

export interface UserState {
    user:User,
    user_list:User[],
    loading:boolean,
    error:Error
}