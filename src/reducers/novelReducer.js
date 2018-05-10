import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {indexReducer} from './indexReducer'
import {catReducer} from './catReducer'
import {sortReducer} from './sortReducer'
import {resultReducer} from './resultReducer'
import {bookinfoReducer} from './bookInfoReducer'
import {chapterReducer} from './chapterReducer'

export default combineReducers({
    indexReducer,
    catReducer,
    sortReducer,
    resultReducer,
    bookinfoReducer,
    chapterReducer,
    routing: routerReducer
})