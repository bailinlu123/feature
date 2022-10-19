// node js
const redux = require('redux')
const reduxLogger = require('redux-logger')

const combineReducers= redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = 'BUY_ICE'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }    
}

function buyIce() {
    return {
        type: BUY_ICE,
        info: 'First redux action'
    }    
}

// // (prevState, action) => newState
// const initialState = {
//     numOfCakes: 10,
//     numberOfIceCreame: 20
// }

// const reducer = (state=initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICE: return {
//             ...state,
//             numberOfIceCreame: state.numberOfIceCreame - 1
//         } 
//         default: return state
//     }
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceState = {
    numberOfIceCreame: 20
}

const reducerCake = (state=initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const reducerIce = (state=initialIceState, action) => {
    switch(action.type) {
        case BUY_ICE: return {
            ...state,
            numberOfIceCreame: state.numberOfIceCreame - 1
        } 
        default: return state
    }
}

// const store = createStore(reducer)
const rootReducer = combineReducers({
    cake: reducerCake,
    ice: reducerIce
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyIce())
unsubscribe()
