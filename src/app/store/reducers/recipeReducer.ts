import * as recipeActions from '../actions/recipeAction'
import { createReducer, Action, on } from '@ngrx/store'

export interface RecipeState {
    recipes: Array<Object>
}

export const initialRecipeState: RecipeState = {
    recipes: []
}
const recipeReducer = createReducer(
    initialRecipeState,
    on(recipeActions.addRecipe, (state, {recipe})=> ({...state, recipes:[...state.recipes, recipe]})),
    on(recipeActions.clearRecipe, (state)=> ({...initialRecipeState}))
    
)

export function setRecipeState(state: RecipeState, action: Action){
    return recipeReducer(state, action)
}