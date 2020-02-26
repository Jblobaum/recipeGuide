import * as userActions from '../actions/userAction'
import { createReducer, Action, on } from '@ngrx/store'

export interface UserState {
    username: string
}

export const initialUserState: UserState = {
    username: ''
}

const userReducer = createReducer(
    initialUserState,
    on(userActions.setUser, (state, {username})=> ({...state, username: username})),
    on(userActions.clearUser, (state)=> ({...initialUserState}))
)

export function setUserstate(state: UserState, action: Action){
    return userReducer(state, action)
}