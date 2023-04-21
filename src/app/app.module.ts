import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { Store, StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    LibraryBooksComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forFeature('bookss', booksReducer),

   // StoreModule.forRoot({ bookss: booksReducer, collectionnnnnnn: collectionReducer }),//creates the name for the store and the reducers tied to it
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  // providers: [ Store ],
  bootstrap: [AppComponent]
})
export class AppModule { }
