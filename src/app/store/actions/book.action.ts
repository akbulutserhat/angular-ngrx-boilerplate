import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';

export enum BookActionTypes {
    GET_BOOK = '[BOOK] GET BOOK',
    GET_BOOK_SUCCESS = '[BOOK] GET BOOK SUCCESS',
    GET_ALL_BOOKS = '[BOOK] GET ALL BOOKS',
    GET_ALL_BOOKS_SUCCESS = '[BOOK] GET ALL BOOKS SUCCESS',
    ADD_BOOK = '[BOOK] ADD BOOK',
    ADD_BOOK_SUCCESS = '[BOOK] ADD BOOK SUCCESS',
    UPDATE_BOOK = '[BOOK] UPDATE BOOK',
    UPDATE_BOOK_SUCCESS = '[BOOK] UPDATE BOOK SUCCESS',
    DELETE_BOOK = '[BOOK] DELETE BOOK',
    DELETE_BOOK_SUCCESS = '[BOOK] DELETE BOOK SUCCESS',
    BOOK_ACTION_FAILURE = '[BOOK] BOOK ACTION FAILURE'
}

export class GetAllBooks implements Action {
    readonly type = BookActionTypes.GET_ALL_BOOKS;
}

export class GetAllBooksSuccess implements Action {
    readonly type = BookActionTypes.GET_ALL_BOOKS_SUCCESS;

    constructor(public payload:Book[]){}
}

export class BookActionFailure implements Action {
    readonly type = BookActionTypes.BOOK_ACTION_FAILURE;

    constructor(public payload:Error){}
}

export type BookAction = GetAllBooks |
                         GetAllBooksSuccess |
                         BookActionFailure