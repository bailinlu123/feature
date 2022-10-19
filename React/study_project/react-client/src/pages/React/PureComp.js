import React, { Component } from 'react'
import PureCompChild1 from './PureCompChild1'
import PureCompChild2 from './PureCompChild2'
import PureCompChild3 from './PureCompChild3'

class PureComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'haku'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'haku'
            })
        }, 2000);
    }
    
    render() {
        console.log("************ parent compnent render *************")
        return (
            <div>
                Parent compnent
                <PureCompChild1 name={this.state.name}/>
                <PureCompChild2 name={this.state.name}/>
                <PureCompChild3 name={this.state.name}/>
            </div>
        )
    }
}

export default PureComp
