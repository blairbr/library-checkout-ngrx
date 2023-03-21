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
}
