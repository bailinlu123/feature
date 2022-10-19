import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {fetchUsers} from './userActions'

function UserContainer() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(fetchUsers())}>Fetch users</button>
            {user.loading ? 
                (<h2> Loading ...</h2>) : 
                (user.error ? (<h2> {user.error} </h2>) : (user.users.map(user => {
                    return (<div>id-{user.id}  name-{user.name} </div>)
                })))
            }
        </div>
    )
}

export default UserContainer
