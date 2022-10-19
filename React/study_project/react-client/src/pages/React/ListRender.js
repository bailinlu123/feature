import React from 'react'
import { FaHackerNewsSquare } from 'react-icons/fa'

function ListRender() {

    const persons =[
        {
            names: "haku",
            age: 35
        },
        {
            names: "son",
            age: 30
        },
    ]

    return (
        <div>
            {persons.map(element => {
                return <h2 key={element.names}>{`I am ${element.names}. I am ${element.age} years old`}</h2>
            })}
        </div>
    )
}

export default ListRender
