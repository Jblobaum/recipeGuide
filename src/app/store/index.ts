import * as Reducers from './reducers'
import { ActionReducerMap } from '@ngrx/store'



export interface RootState{
    recipe: Reducers.RecipeState,
    user: Reducers.UserState,
    drink: Reducers.drinkState
}

export const reducers: ActionReducerMap<RootState> = {
    user: Reducers.setUserstate,
    recipe: Reducers.setRecipeState,
    drink: Reducers.setDrinkState
}


