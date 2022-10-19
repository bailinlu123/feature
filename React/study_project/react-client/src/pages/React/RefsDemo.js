import React, { Component } from 'react'
import Input from "./Input"

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()

        this.componentRef = React.createRef()
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }
    
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }

        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    clickHandler2 = () => {
        this.componentRef.current.inputFocus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <input type="text" ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}> click </button>
                <br />
                <Input ref={this.componentRef}></Input>
                <button onClick={this.clickHandler2}>Focus Input</button>
            </div>
        )
    }
}

export default RefsDemo
