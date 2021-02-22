import { BookAction, BookActionTypes } from '../actions/book.action';
import { BookState } from '../states/book.state';


const initialState = {
    book_list:[],
    loading:false,
    error:undefined!
}

export function BookReducer(state:BookState = initialState, action:BookAction) {
    switch(action.type) {
        case BookActionTypes.GET_ALL_BOOKS:
            return {
                ...state,
                loading:true
            }
        case BookActionTypes.GET_ALL_BOOKS_SUCCESS:
            return {
                ...state,
                loading:false,
                book_list:action.payload
            }
        case BookActionTypes.BOOK_ACTION_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload                
            }
        default:
            return state;
    }
}