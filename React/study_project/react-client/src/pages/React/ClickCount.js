import React, { Component } from 'react'
import withCounter from './WithCounter'

class ClickCount extends Component {

    render() {
        const {count, incrementCount,name } = this.props
        return (
            <button onClick={incrementCount}>{name} Click {count} time</button>
        )
    }
}

export default withCounter(ClickCount)
