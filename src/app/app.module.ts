import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { CheckedOutBooksComponent } from './checked-out-books/checked-out-books.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryBooksComponent,
    CheckedOutBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
