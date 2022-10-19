import React from 'react'
import useCounter from './Hooks/useCounter'

function CounterHook() {

    const[one, ico, deo, rso] = useCounter(undefined,1)
    const[two, ict, det, rst] = useCounter(5,2)


    return (
        <div>
            <div>
                Counert One - {one}
                <br />
                <button onClick={ico}>Increment</button>
                <button onClick={deo}>Decrement</button>
                <button onClick={rso}>Reset</button>
            </div>
            <div>
                Counert Two - {two}
                <br />
                <button onClick={ict}>Increment</button>
                <button onClick={det}>Decrement</button>
                <button onClick={rst}>Reset</button>
            </div>
        </div>
    )
}


export default CounterHook
