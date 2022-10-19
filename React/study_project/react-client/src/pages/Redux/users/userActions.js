import axios from 'axios'
import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILUER} from './usersTypes'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUserError = error => {
    return {
        type: FETCH_USERS_FAILUER,
        payload: error
    }
}

export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
            const users = res.data.map(user => {
                const {id, name} = user
                return {id, name}
            })
            dispatch(fetchUserSuccess(users))
          })
          .catch(err => {
            dispatch(fetchUserError('something went wrong'))
          })
    }
}