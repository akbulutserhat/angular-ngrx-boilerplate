export interface Book {
    _id:string,
    title:string,
    author:string,
    image?:string,
    descriptions?:[],
    categories?:[],
    readLink?:string,
    libraries?:[]
}