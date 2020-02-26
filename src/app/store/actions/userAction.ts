import { createAction, props } from '@ngrx/store';




export const setUser = createAction('[User State] Set User', props<{username: string}>())
export const clearUser = createAction('[User State] Clear User')