import * as recipeActions from '../actions/recipeAction'
import { createReducer, Action, on } from '@ngrx/store'

export interface RecipeState {
    recipe: Object
}

export const initialState: RecipeState = {
    recipe: []
}
const recipeReducer = createReducer(
    initialState,
    on(recipeActions.breakdown, (state, {recipe})=> ({...state, recipe: recipe})),
    on(recipeActions.clear, (state)=> ({...initialState}))
    
)

export function reducer(state: RecipeState, action: Action){
    return recipeReducer(state, action)
}