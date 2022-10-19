import React from 'react'
import './myStyles.css'

import './appStyle.css'
import stlye from './appStyle.module.css'

function Stylessheet(props) {
    const className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>hello</h1>

            {/* can be used in children component */}
            <h1 className='error'>Error</h1>

            {/* can be not used in children component */}
            <h1 className={stlye.success}>Success</h1>

        </div>
    )
}

export default Stylessheet
