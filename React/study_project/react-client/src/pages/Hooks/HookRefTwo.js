import React, {useEffect,useState, useRef} from 'react'

function HookRefTwo() {
    const [timer, setTimer] = useState(0)

    const ref = useRef()

    useEffect(() => {
        ref.current = setInterval(() => {
            setTimer(prev => prev + 1)
        },1000)
        return () => {
            clearInterval(ref.current)
        }
    }, [])

    return (
        <div>
            Hook Timer - {timer}
            <br />
            <button onClick={() => clearInterval(ref.current)}>Clear Timer</button>
        </div>
    )
}

export default HookRefTwo

