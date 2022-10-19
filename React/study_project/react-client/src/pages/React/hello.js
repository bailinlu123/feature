import React from 'react'

const Hello = () => {
    
    // return (
    //     <div>
    //         <h1>Hello</h1>
    //     </div>
    // )

    // return React.createElement('div',null, '<h1> hello </h1>')

    // return React.createElement('div',null, React.createElement('h1', null, 'Hello'))

    // return React.createElement(
    //     'div',
    //     {id: 'hello', class:'dummyClass'},
    //     React.createElement('h1', null, 'Hello'))

    return React.createElement(
        'div',
        {id: 'hello', className:'dummyClass'},
        React.createElement('h1', null, 'Hello'))

    // Calss -> className
    // for -> htmlFor
    // onclick -> onClick
    // tabindex -> tabIndex
}

export default Hello