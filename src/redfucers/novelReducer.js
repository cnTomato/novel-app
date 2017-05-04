import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import catReducer from './catReducer'

export default combineReducers({
    catReducer,
    routing: routerReducer
})