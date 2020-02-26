import * as recipeReducers from './reducers/recipeReducer'
import { ActionReducerMap } from '@ngrx/store'
import * as userReducers from './reducers/userReducer'
import * as drinkReducers from './reducers/drinkReducer'


export interface RootState{
    recipe: recipeReducers.RecipeState,
    user: userReducers.UserState,
    drink: drinkReducers.drinkState
}

export const reducers: ActionReducerMap<RootState> = {
    user: userReducers.reducer,
    recipe: recipeReducers.reducer,
    drink: drinkReducers.reducer
}

export const getRecipeState = (state: RootState)=> state.recipe;
export const getUserState = (state: RootState)=> state.user;
export const getDrinkState = (state: RootState)=> state.drink;


