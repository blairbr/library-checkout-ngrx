import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Book } from '../book.model';

@Component({
  selector: 'app-checked-out-books',
  templateUrl: './checked-out-books.component.html',
  styleUrls: ['./checked-out-books.component.css']
})
export class CheckedOutBooksComponent {
  constructor(private httpClient: HttpClient) {}

  private bookURL : string = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';
  //public bookList : Observable<Book> = of([]);
  ngOnInit() {
    this.getBooks().subscribe(x=>console.log("pizza", x));
  }

  getBooks() : Observable<Book[]> {
    return this.httpClient.get<{items: Book[]}>(this.bookURL).pipe(map(x=>x.items));
    //this.bookList.subscribe(x => console.log("x is:" , x, "type of x: ", typeof(x)));
  }


}
