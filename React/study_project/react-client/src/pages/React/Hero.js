import React from 'react'

function Hero({name}) {
    if(name === 'haku'){
        console.log(`ERROR ********* ${name}`)
        throw new Error('haku is not a hero')
    }
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

export default Hero
