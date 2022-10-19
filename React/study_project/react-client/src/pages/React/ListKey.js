import React from 'react'

function ListKey() {

    const persons =[
        {
            id: 1,
            name: 'Haku',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        },
    ]


    const personList = persons.map(person => <h2 key={person.id}>{`I am ${person.names}. I am ${person.age} years old.I know ${person.skill}`}</h2>)
    
    // key can not be a prpo
    return (
        <div>
          {personList}
        </div>
    )
}

export default ListKey
