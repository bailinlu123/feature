import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props){
        super(props)

        this.state ={
            message: 'Hello'
        }

        // 3
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: 'Goodbye'
        })
    }

    clickHandlerArrao = ()=> {
        this.setState({
            message: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 1 */}
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                
                {/* 2 */}
                {/* <button onClick={() => this.clickHandler()}>click</button> */}

                {/* 3 normal*/}
                {/* <button onClick={this.clickHandler}>click</button> */}

                {/* 4 normal*/}
                {/* <button onClick={this.clickHandlerArrao}>click</button> */}

                {/* 5 */}
                <button onClick={() => this.clickHandlerArrao()}>click</button>

            </div>
        )
    }
}

export default EventBind