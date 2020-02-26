import * as drinkActions from '../actions/drinkAction'
import { createReducer, Action, on } from '@ngrx/store'




export interface drinkState {
    drink: Object
}

export const initialState: drinkState = {
    drink: []
}

const drinkReducer = createReducer(
    initialState,
    on(drinkActions.add, (state, {drink})=> ({...state, drink: drink})),
    on(drinkActions.clear, (state)=> ({...initialState}))
)

export function reducer(state: drinkState, action: Action){
    return drinkReducer(state, action)
}