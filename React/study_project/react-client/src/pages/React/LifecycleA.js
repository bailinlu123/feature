import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    
    // rconst
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'haku'
        }

        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    changeState = () => {
        this.setState({
            name: 'Haku change state'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <h2>LifecycleA</h2>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />         
            </div>
        )
    }
}

export default LifecycleA
