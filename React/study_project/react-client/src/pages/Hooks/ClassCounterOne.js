import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }
    }
    componentDidMount() {
        document.title = `Cliked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log('Updating document title')
            document.title = `Cliked ${this.state.count} times`    
        }
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.name} 
                    onChange={e => this.setState({name: e.target.value})}
                />
                <button onClick={() => {this.setState(prevState => ({count: prevState.count + 1}))}}>
                    Click {this.state.count}  times  
                </button>            
            </div>
        )
    }
}

export default ClassCounterOne
