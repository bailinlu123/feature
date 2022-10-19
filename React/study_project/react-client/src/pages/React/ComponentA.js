import React, { Component } from 'react'
import ComponentC from './ComponentC'
import {UserProvider} from './userContext'

class ComponentA extends Component {
    render() {
        return (
            <div>
                <UserProvider value="haku">
                    <ComponentC />
                </UserProvider>
            </div>
        )
    }
}

export default ComponentA
