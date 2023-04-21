import { createFeatureSelector } from "@ngrx/store";
import { booksReducer } from "./books.reducer";
import { Book } from "../book.model";

//create a slice called books
export const selectBooks = createFeatureSelector<Book[]>('bookss');

//these are the associated reducers for 'bookss'
export const reducers = {
    books: booksReducer,
};