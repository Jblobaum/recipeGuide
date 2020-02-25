import * as recipeReducers from './reducers/recipeReducer'
import { ActionReducerMap } from '@ngrx/store'


export interface RootState{
    recipe: recipeReducers.RecipeState
}

export const reducers: ActionReducerMap<RootState> = {
    recipe: recipeReducers.reducer
}

export const getRecipeState = (state: RootState)=> state.recipe;


