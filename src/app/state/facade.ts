import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { changeCheckedOutStatus, checkOutBook } from './actions'
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

        this.store.dispatch(checkOutBook({ book: book2 }));
    }

    public changeCheckedOutStatus() {
      console.log("changedChecked Out status in the facade");

      this.store.dispatch(changeCheckedOutStatus({ book: book2 }));
  }

    constructor(private store: Store) {}
}