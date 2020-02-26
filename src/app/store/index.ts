import * as recipeReducers from './reducers/recipeReducer'
import { ActionReducerMap } from '@ngrx/store'
import * as userReducers from './reducers/userReducer'


export interface RootState{
    recipe: recipeReducers.RecipeState,
    user: userReducers.UserState
}

export const reducers: ActionReducerMap<RootState> = {
    user: userReducers.reducer,
    recipe: recipeReducers.reducer
}

export const getRecipeState = (state: RootState)=> state.recipe;
export const getUserState = (state: RootState)=> state.user;


