import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from './cakeActions'

function CakeContainer(props) {
    // console.log(props)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDiapatchToProps = dispatch => {
    return {
        bufCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDiapatchToProps)(CakeContainer)
