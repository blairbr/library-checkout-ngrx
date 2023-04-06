import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { CheckedOutBooksComponent } from './checked-out-books/checked-out-books.component';
import { Store, StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LibraryBooksComponent,
    CheckedOutBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    //TODO change this
  ],
  providers: [ Store ],
  bootstrap: [AppComponent]
})
export class AppModule { }
