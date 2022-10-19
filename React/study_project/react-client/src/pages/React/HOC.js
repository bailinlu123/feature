import React from 'react'
import HoverCount from './HoverCount'
import ClickCount from './ClickCount'

function HOC() {
    return (
        <div>
            <HoverCount age='12'/>
            <ClickCount />
        </div>
    )
}

export default HOC