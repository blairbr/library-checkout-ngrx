import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, tap, Observable, of } from 'rxjs';
import { Book } from '../book.model';
import { Facade } from '../state/facade';
import { Store } from '@ngrx/store';
import { BooksApiActions } from '../state/actions';

@Component({
  selector: 'app-library-books',
  templateUrl: './library-books.component.html',
  styleUrls: ['./library-books.component.css']
})
export class LibraryBooksComponent {

  public bookList$: Observable<Book[]> = of([]);
  private bookURL : string = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';
  ngOnInit() {
    this.getBooks().subscribe(books => this.store.dispatch(BooksApiActions.retrievedBookList({ books })));
  }

  public getBooks() : Observable<Book[]> {
    this.bookList$ = this.httpClient.get<{items: Book[]}>(this.bookURL).pipe(
      tap(x=>console.log("GET BOOKS PIPE", "books: ", x)),
      map(x=>x.items),
     
      // map(x=>x.map(book=> ({...book, checkedOut: false}) )),
      // tap(x => console.log("After setting checked out to false... maybe?", x))
      );

    return this.bookList$;
  }

  //why does changing the name from items to books break the display??
//here need to map into each book and give it the checked out property?

  public checkOutLibraryBook(book : Book) : void{
    this.facade.checkOutLibraryBook(book);
  }

  constructor(private httpClient: HttpClient, private facade: Facade, private store: Store) {}
}
// 1) the whole book object comes in rather than it matching the interface created... why?


//NOTES:

//1) look at the unchecked and checked updates for pending changes
//2) look at the adapters (combination of map and array so it's iterable and can maintain an order)
//3) books interface check line 44 in pending update ts for getAs example so that it returns certain properties only