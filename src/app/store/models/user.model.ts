export interface User {
    _id:string,
    email:string,
    firstName:string,
    lastName?:string,
    favorited_books?:[],
    books_in_the_basket?:[]
    rented_books?:[],
    debts?:[],
    jwtToken?:string,
    refreshToken?:string
}

