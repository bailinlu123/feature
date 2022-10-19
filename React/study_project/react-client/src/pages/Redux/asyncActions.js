const redux = require('redux')
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore

const initialState ={
    lodaing: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'


const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserError = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
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
        case FETCH_USERS_FAILURE :
            return {
                lodaing: false,
                users: [],
                error: action.payload
            }
        default : return state
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data.map(user=> user.id)
                dispatch(fetchUserSuccess(users))
            })
            .catch(err => {
                dispatch(fetchUserError('Something went wrong'))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
const unscribe = store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())
// unscribe()