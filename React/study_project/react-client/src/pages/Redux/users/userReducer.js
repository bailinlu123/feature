import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILUER} from './usersTypes'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST :
            return {
                ...state,
                lodaing: true
            }
        case FETCH_USERS_SUCCESS :
            return {
                lodaing: false,
                users: action.payload,
                error: ''
            }            
        case FETCH_USERS_FAILUER :
            return {
                lodaing: false,
                users: [],
                error: action.payload
            }
        default : return state
    }
}
