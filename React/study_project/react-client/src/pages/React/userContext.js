import React from 'react'

const UserContext = React.createContext()

// default son
// const UserContext = React.createContext("son")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext