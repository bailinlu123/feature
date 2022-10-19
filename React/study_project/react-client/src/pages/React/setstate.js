import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    increment(){

        // this.state.count = this.state.count + 1
        // console.log(this.state.count)

        // this.setState({
        //     count : this.state.count + 1
        // }
        // ,() => {
        //     console.log(`Callback vaule:${this.state.count}`)
        // }
        // )
        // console.log(this.state.count)

        this.setState((preState, props) => 
            {
            return {
                count: preState.count + 1
            }})
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button><br/>
                <button onClick={() => this.incrementFive()}>Increment Five</button>
            </div>
        )
    }
}

export default Counter
