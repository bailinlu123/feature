import { type } from 'os'
import React from 'react'

type GreetPrpos = {
    name: string,
    messageCount?: number,
    isLoginedIn: boolean,
}

function Greet(prpos: GreetPrpos) {
    const {messageCount = 0} = prpos;
    return (
        <div>
            <h2>
            {prpos.isLoginedIn ?
                `Welcome ${prpos.name} ! You have ${messageCount} unread messages` :
                `welcome Guest`
            }
            </h2>
        </div>
    )
}

export default Greet
