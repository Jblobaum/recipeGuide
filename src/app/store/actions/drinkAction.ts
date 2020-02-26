import { createAction, props } from '@ngrx/store';




export const addDrink = createAction('[DrinkState] Set Drink', props<{drink: Object}>())
export const clearDrink = createAction('[Drink State] Clear Drink')