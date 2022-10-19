import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext, AgeContext} from '../ComponentContext'

function ComponentE() {

    const user = useContext(UserContext)
    const age = useContext(AgeContext)

    return (
        <div>
            <div>user-{user}  age-{age} </div>
            <ComponentF />
        </div>
    )
}

export default ComponentE
