import { createAction, props } from '@ngrx/store';




export const addRecipe = createAction('[Recipe State] Set Recipe', props<{recipe: Object}>())
export const clearRecipe = createAction('[Recipe State] Clear Recipe')