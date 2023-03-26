import { createAction, props } from "@ngrx/store";

export const checkOutBook = createAction('[Library Book] Check Out Book', props<{ id: string }>());

export const checkInBook = createAction('[Library Book] Check In Book', props<{ id: string }>());