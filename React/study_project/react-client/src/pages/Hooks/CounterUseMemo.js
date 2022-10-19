import React, {useState, useMemo} from 'react'

function CounterUseMemo() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () =>{
        setCounterOne(prev => prev+ 1)
    }


    const incrementTwo = () =>{
        setCounterTwo(prev => prev+ 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while(i < 900000000) i ++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <button onClick={incrementOne}>Count one - {counterOne} </button>
            <span> {isEven ? 'Even' : 'Odd'} </span>
            <br />
            <button onClick={incrementTwo}>Count two - {counterTwo} </button>
        </div>
    )
}

export default CounterUseMemo
