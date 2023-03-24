import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Facade {
    public checkOutLibraryBook() {
        console.log("yay you checked out a library book in the facade");
    }

    constructor() {}
}