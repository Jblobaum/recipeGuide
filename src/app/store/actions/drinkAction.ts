import { createAction, props } from '@ngrx/store';




export const add = createAction('[DrinkState] Set Drink', props<{drink: Object}>())
export const clear = createAction('[Drink State] Clear Drink')