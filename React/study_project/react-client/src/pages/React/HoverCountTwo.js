import React, { Component } from 'react'

class HoverCountTwo extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver = {incrementCount}> Hovered {count} Times </h2>                
            </div>
        )
    }
}

export default HoverCountTwo
