import React,{useReducer} from 'react'
import ComponentA from './Reducer/ComponentA'
import ComponentB from './Reducer/ComponentB'
import ComponentC from './Reducer/ComponentC'

const initialState = 0
const reducer = (state, action) => {
    // return newState
    switch(action){
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' :
            return initialState
        default :
            return state
    }
}

export const CountContext = React.createContext()

function ReducerCountFour() {
    const [count,dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
                count - {count}
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </CountContext.Provider>
        </div>
    )
}

export default ReducerCountFour
