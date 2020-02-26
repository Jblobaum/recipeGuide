import * as userActions from '../actions/userAction'
import { createReducer, Action, on } from '@ngrx/store'

export interface UserState {
    username: string
}

export const initialState: UserState = {
    username: ''
}

const userReducer = createReducer(
    initialState,
    on(userActions.setUser, (state, {username})=> ({...state, username: username})),
    on(userActions.clearUser, (state)=> ({...initialState}))
)

export function reducer(state: UserState, action: Action){
    return userReducer(state, action)
}