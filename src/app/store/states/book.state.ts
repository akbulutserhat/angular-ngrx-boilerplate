import { Book } from '../models/book.model';

export interface BookState {
    book_list:Book[],
    loading:boolean,
    error: Error
}