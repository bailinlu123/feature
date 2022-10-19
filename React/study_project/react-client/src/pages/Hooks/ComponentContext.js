import React from 'react'
import ComponentC from './Context/ComponentC'

export const UserContext = React.createContext()
export const AgeContext = React.createContext()

function ComponentContext() {
    return (
        <div>
            <UserContext.Provider value={'haku'}>
                <AgeContext.Provider value={12}>
                    <ComponentC />
                </AgeContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentContext
