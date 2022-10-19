import React, { Component } from 'react'

export class ClassClick extends Component {
    cilckHandler(){
        console.log(`clicked the button`)
    }
    render() {
        return (
            <div>
                <button onClick={this.cilckHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
