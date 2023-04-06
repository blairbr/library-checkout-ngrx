import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, tap, Observable, of } from 'rxjs';
import { Book } from '../book.model';
import { Facade } from '../state/facade';

@Component({
  selector: 'app-library-books',
  templateUrl: './library-books.component.html',
  styleUrls: ['./library-books.component.css']
})
export class LibraryBooksComponent {

  public bookList$: Observable<Book[]> = of([]);
  private bookURL : string = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';
  ngOnInit() {
    this.getBooks().subscribe(x=>console.info("french fries", x));
  }

  public getBooks() : Observable<Book[]> {
    this.bookList$ = this.httpClient.get<{items: Book[]}>(this.bookURL).pipe(
      tap(x=>console.log("GET BOOKS PIPE", x)),
      map(x=>x.items)
      
      );
    return this.bookList$;
  }

  public checkOutLibraryBook(bookId:string) : void{
    this.facade.addBookToCollection(bookId);
  }

  constructor(private httpClient: HttpClient, private facade: Facade) {}
}
// 1) fix the initial state - look at example to see how this was done
// 2) get actions to fire
