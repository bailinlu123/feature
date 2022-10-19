import React from 'react'
import ClickCounterTwo from './ClickCounterTtwo'
import HoverCountTwo from './HoverCountTwo'
import Counter from './Counter'
import User from './User'

function HOC_props() {
    return (
        <div>
            <Counter> 
                {(count, incrementCount) => (
                    <ClickCounterTwo count={count} incrementCount={incrementCount}/>
                )}
            </Counter>
            {/* <Counter 
                render={(count, incrementCount) => (
                    <HoverCountTwo count={count} incrementCount={incrementCount}/>
                )}
            /> */}
            {/* <ClickCounterTwo />
            <HoverCountTwo />
            <User render={(isLoggedIn) => isLoggedIn ? 'Son' : 'Haku'} /> */}
        </div>
    )
}

export default HOC_props
