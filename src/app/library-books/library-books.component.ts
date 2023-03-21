import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Book } from '../book.model';

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
    this.bookList$ = this.httpClient.get<{items: Book[]}>(this.bookURL).pipe(map(x=>x.items));
    return this.bookList$;
  }

  constructor(private httpClient: HttpClient) {}
}
