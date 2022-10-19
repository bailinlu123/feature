import React from 'react'
const withCounter = (WrappedComponent, incrrmentNum = 1) => {

    class NewCOmponent extends React.Component {
    
        constructor(props) {
            super(props)
        
            this.state = {
                count: 0
            }
        }
        
        incrementCount = ()  => {
            this.setState(prevState => {
                return { count: prevState.count + incrrmentNum}
            })
        }

        render() {
            return <WrappedComponent name='Haku' count={this.state.count} incrementCount={this.incrementCount}  {...this.props} > </WrappedComponent>
        }
    }
    return NewCOmponent
}

export default withCounter