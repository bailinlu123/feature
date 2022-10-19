import React from 'react'

function PureCompChild3({name}) {
    console.log('memo compnents rerender')
    return (
        <div>
            hello Memo Compnents {name}
        </div>
    )
}

// support react 16.6 
export default React.memo(PureCompChild3)
