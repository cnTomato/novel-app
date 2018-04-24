import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {indexReducer} from './indexReducer'

export default combineReducers({
    indexReducer,
    routing: routerReducer
})