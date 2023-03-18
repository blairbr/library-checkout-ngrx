import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checked-out-books',
  templateUrl: './checked-out-books.component.html',
  styleUrls: ['./checked-out-books.component.css']
})
export class CheckedOutBooksComponent {
  constructor(private httpClient: HttpClient) {}

  private bookURL : string = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';

  ngOnInit() {
    const bookList = this.httpClient.get(this.bookURL);
  }



}
