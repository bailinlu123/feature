import React, { PureComponent } from 'react'

class PureCompChild1 extends PureComponent {
    
    render() {
        console.log("pure comp rerender")
        return (
            <div>
                hello pure Comp {this.props.name}
            </div>
        )
    }
}

export default PureCompChild1
