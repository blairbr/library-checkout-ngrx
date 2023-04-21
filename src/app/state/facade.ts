import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { BooksActions, BooksApiActions } from './actions';
import { StoreModule } from '@ngrx/store';
import { Book } from '../book.model';
//import { selectBookCollection, selectBooks } from './selectors';

const book2: Book = {
  id: 'hello',
  volumeInfo: {
    title: 'harry potter and the prisioner...',
    authors: ['jk rowling'],
    description: 'best book ever',
  },
  checkedOut: false,
};

@Injectable({
  providedIn: 'root',
})
export class Facade {
 // books$ = this.store.select(selectBooks);

  public checkOutLibraryBook(book : Book) {
    console.log('yay you checked out a library book in the facade');

    this.store.dispatch(BooksActions.checkOutBook({ book: book }));
  }

  constructor(private store: Store) {}
}

  //store - single JS object, accessible to all UI, anything that represents the app data. Cannot directly modify store
  // reducers update the store.
  // {
  //   books: [],
  //   user: {},
  //   library: []
  // }




