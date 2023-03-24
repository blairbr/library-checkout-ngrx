import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { CheckedOutBooksComponent } from './checked-out-books/checked-out-books.component';
import { Facade } from './state/facade';

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
  providers: [Facade],
  bootstrap: [AppComponent]
})
export class AppModule { }
