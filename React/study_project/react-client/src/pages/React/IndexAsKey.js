import React from 'react'

function IndexAsKey() {
    const names = ['Haku', 'Clark', 'Mike', 'Haku']

    // const nameList = names.map((name, index) => <h1 key={name}>{name}</h1>)
    const nameList = names.map((name, index) => <h1 key={index}>{index} {name}</h1>)

    return (
        <div>
            {nameList}
            <a href="https://codepen.io/gopinav/pen/gQpepq?editors=0010"　target='_blank'> 参照URL</a>

            <h2> the items in your list do not have a unique id.</h2>
            <h2> the list is a static list and will not change.</h2>
            <h2> the list will never be recordered or filtered.</h2>

        </div>
    )
}

export default IndexAsKey
