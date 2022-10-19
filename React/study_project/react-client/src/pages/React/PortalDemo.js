import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            <h1>Portals Demo</h1>
        </div>,
        document.getElementById('portal-root')
    )

    // https://codesandbox.io/s/00254q4n6p
}

export default PortalDemo
