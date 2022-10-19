import {useState} from 'react'

function useCounter(initialState=0, value) {
    const [counter, setCounter] = useState(initialState,value)

    const increment = () => {
        setCounter(prev => prev + 1)
    }

    const decremet = () => {
        setCounter(prev => prev - 1)
    }

    const reset = () => {
        setCounter(initialState)
    }

    return [counter, increment, decremet, reset]
}

export default useCounter
