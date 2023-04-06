import { createAction, createActionGroup, props } from "@ngrx/store";
import { Book } from "../book.model";

export const BooksActions = createActionGroup({
    source: 'Book', //this is what looked like '[Books] ..' in the createAction way of doing this
    events: {
      'Add Book': props<{ bookId: string }>(),
      'Remove Book': props<{ bookId: string }>(),
      'Check Out Book': props<{ book: Book}>()
    },
  });
   
export const BooksApiActions = createActionGroup({
    source: 'Books API',
    events: {
      'Retrieved Book List': props<{ books: Book[] }>(),
    },
});

//readonly im guessing was just for the books retrieved from the API so you cant fiddle w the list
// export const checkOutBook = createAction('[Library Book] Check Out Book', props<{ book: Book }>());

// export const checkInBook = createAction('[Library Book] Check In Book', props<{ book: Book }>());

// export const changeCheckedOutStatus = createAction('[Library Book] Change Checked Out Status', props<{ book: Book }>());