import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import {requestErrorMiddleware} from './requestException'

const middleware = [requestErrorMiddleware, thunk];

const novelCreateStore = compose(
    applyMiddleware(...middleware)
)(createStore);

export default novelCreateStore