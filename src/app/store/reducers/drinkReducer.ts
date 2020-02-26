import * as drinkActions from '../actions/drinkAction'
import { createReducer, Action, on } from '@ngrx/store'




export interface drinkState {
    drinks: Array<Object>
}

export const initialDrinkState: drinkState = {
    drinks: []
}

const drinkReducer = createReducer(
    initialDrinkState,
    on(drinkActions.addDrink, (state, {drink})=> ({...state, drinks:[...state.drinks, drink]})),
    on(drinkActions.clearDrink, (state)=> ({...initialDrinkState}))
)

export function setDrinkState(state: drinkState, action: Action){
    return drinkReducer(state, action)
}