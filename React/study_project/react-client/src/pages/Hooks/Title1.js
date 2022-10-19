import React, {useState} from 'react'
import useDocument from './Hooks/useDocument'

function Title1() {
    const [counter, setCounter] = useState(0)
    useDocument(counter)

    const increment = () => {
        setCounter(counter => counter + 1)
    }

    return (
        <div>
            <button onClick={increment}>Counter1-{counter}</button>        
        </div>
    )
}

export default Title1
