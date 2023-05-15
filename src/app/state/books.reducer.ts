import { createReducer, on } from '@ngrx/store';
import { Book } from '../book.model';
import * as BookActions from './actions';
import { map } from 'rxjs/operators';

export const initialBookArrayState: Book[] = [];

// 'bookss': {
//  the section below is the state
//   'books:' {
//     'checkedout':
//     'checkedin':  
//   }
// }
export const booksReducer = createReducer(
  initialBookArrayState,
  on(BookActions.BooksApiActions.retrievedBookList, (state, { books }) => ({...state, books})),
  on(BookActions.BooksActions.checkOutBook, (state, { book }) => state
  
  
));
