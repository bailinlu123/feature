import React, {Component} from 'react'
// rce

class State extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changMessage(){
        this.setState({
            message: 'button is clicked'
        })
    }

    render(){
        return (
            <>
                <h1> {this.state.message} </h1>
                <button onClick={ () => this.changMessage()}>
                    Click
                </button>
            </>
        )
    }
}

export default State