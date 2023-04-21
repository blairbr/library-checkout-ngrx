import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Book } from "../book.model";

export const BooksActions = createActionGroup({
    source: 'Book',
    events: {
      'Check Out Book': props<{ book: Book }>()
    },
  });
   
export const BooksApiActions = createActionGroup({
    source: 'Books API',
    events: {
      'Retrieved Book List': props<{ books: Book[] }>(),
      'Get All Books': emptyProps()
    },
});