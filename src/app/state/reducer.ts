import { createReducer, on } from '@ngrx/store'
import { Book } from '../book.model'
import * as BookActions from './actions'
import { map } from 'rxjs/operators'

export const initialBookState: Book = {id: '', volumeInfo: { title: '', description: '', authors:[]}, checkedOut: false};

export const initialState: ReadonlyArray<boolean> = [];

export const collectionReducer = createReducer(
  initialState,
  on(BookActions.checkOutBook, (state, { id }) =>
    state.map((checkedOut) => checkedOut = true)
  ),
);
