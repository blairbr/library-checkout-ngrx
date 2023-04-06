import { createReducer, on } from '@ngrx/store';
import { Book } from '../book.model';
import * as BookActions from './actions';
import { map } from 'rxjs/operators';

export const initialBookArrayState: Book[] = [];

export const booksReducer = createReducer(
  initialBookArrayState,
  on(BookActions.BooksApiActions.retrievedBookList, (_state, { books }) => books)
);


// export const initialBookState: Book = {
//   id: '',
//   volumeInfo: { title: '', authors: [''], description: '' },
//   checkedOut: false,
// };

// const book2: Book = {
//   id: 'hello',
//   volumeInfo: {
//     title: 'harry potter and the prisoner of azkaban',
//     authors: ['jk rowling'],
//     description: 'best book ever',
//   },
//   checkedOut: false,
// };

// export const bookArrayReducer = createReducer(
//   initialBookArrayState,
//   on(BookActions.BooksActions.checkOutBook, (state: Book[], { book }): Book[] => ({
//     ...state
//   }))
// );

// export const bookReducer = createReducer(
//   initialBookState,
//   on(
//     BookActions.BooksActions.checkOutBook,
//     (state: Book, { book }): Book => ({
//       ...state,
//       checkedOut: !book.checkedOut,
//     })
//   )
// );
