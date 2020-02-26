import { createAction, props } from '@ngrx/store';




export const add = createAction('[Recipe State] Set Recipe', props<{recipe: Object}>())
export const clear = createAction('[Recipe State] Clear Recipe')