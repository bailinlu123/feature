import React, { Component } from 'react'

class PureCompChild2 extends Component {
    render() {
        console.log("regular rerender")
        return (
            <div>
                hello regular comp {this.props.name}
            </div>
        )
    }
}

export default PureCompChild2
