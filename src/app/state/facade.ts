import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { BooksActions, BooksApiActions} from './actions'
import { StoreModule } from '@ngrx/store';
import { Book } from '../book.model';

const book2 : Book = {
  id: 'hello',
  volumeInfo: {
      title: 'harry potter and the prisoner of azkaban',
      authors: ['jk rowling'],
      description: 'best book ever',
  },
  checkedOut: false
}

@Injectable({
  providedIn: 'root'
})
export class Facade {

    public checkOutLibraryBook() {
        console.log("yay you checked out a library book in the facade");

        this.store.dispatch(BooksActions.checkOutBook({ book: book2 }));
    }

    constructor(private store: Store) {}
}