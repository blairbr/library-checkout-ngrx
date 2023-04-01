import { createAction, props } from "@ngrx/store";
import { Book } from "../book.model";

export const checkOutBook = createAction('[Library Book] Check Out Book', props<{ book: Book }>());

export const checkInBook = createAction('[Library Book] Check In Book', props<{ book: Book }>());

export const changeCheckedOutStatus = createAction('[Library Book] Changed Checked Out Status', props<{ book: Book }>());