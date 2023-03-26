import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { checkOutBook } from './actions'
import { StoreModule } from '@ngrx/store';



@Injectable({
  providedIn: 'root'
})
export class Facade {



    public checkOutLibraryBook() {
        console.log("yay you checked out a library book in the facade");

        this.store.dispatch(checkOutBook({ id: 'bookId1' }));
    }

    constructor(private store: Store) {}
}