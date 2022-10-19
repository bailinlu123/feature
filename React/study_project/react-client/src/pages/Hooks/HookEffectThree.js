import React,{useState, useEffect} from 'react'
import HookEffectTwo from './HookEffectTwo'

function HookEffectThree() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <HookEffectTwo />}
        </div>
    )
}

export default HookEffectThree
