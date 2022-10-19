import React from 'react'

function Count(props) {
    const {text, count} = props
    console.log(`Rendering ${text}`)

    return (
        <div>
            Text - {text}   Count - {count}
        </div>
    )
}

export default React.memo(Count)
