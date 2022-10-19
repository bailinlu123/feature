import React from 'react'

function Funcclick() {

    const clickHandler = ()=> {
        console.log(`Button Clicked`)
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            
            {/* miss */}
            {/* <button onClick={clickHandler()}>Click</button> */}
        </div>
    )
}

export default Funcclick