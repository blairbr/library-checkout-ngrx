import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class Facade {



    public checkOutLibraryBook() {
        console.log("yay you checked out a library book in the facade");
    }

    constructor(store: Store) {}
}