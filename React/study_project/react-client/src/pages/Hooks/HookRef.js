import React, {useEffect, useEffeft, useRef} from 'react'

function HookRef() {
    
    const ref = useRef(null)

    useEffect(() => {
        // focus 
        ref.current.focus()    
    })
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}

export default HookRef
