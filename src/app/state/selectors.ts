import { createFeatureSelector } from '@ngrx/store';
import { Book } from '../book.model';


 export const selectBooks = createFeatureSelector<Book[]>('bookss');