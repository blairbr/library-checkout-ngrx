import { createReducer, on } from '@ngrx/store';
import { Book } from '../book.model';
import * as BookActions from './actions';
import { map } from 'rxjs/operators';

export const initialBookArrayState: Book[] = [];

export const booksReducer = createReducer(
  initialBookArrayState,
  on(BookActions.BooksApiActions.retrievedBookList, (state, { books }) => ({...state, books})),
  on(BookActions.BooksActions.checkOutBook, (state, { book }) => 
  ({ ...state, book: book.checkedOut = !book.checkedOut })
  
));
