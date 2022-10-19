import React, { Component } from 'react'
import withCounter from './WithCounter'

class HoverCount extends Component {
      render() {
        const {count, incrementCount,name } = this.props
        return (
            <h2 onMouseOver={incrementCount}>{name} {this.props.age} Hoverd {count} time</h2>
        )
    }
}

export default withCounter(HoverCount , 10)
