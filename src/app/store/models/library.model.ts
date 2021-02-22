export interface Library {
    _id:string,
    name:string,
    address:string,
    books?:[],
    orders?:[],
    users?:[]
}