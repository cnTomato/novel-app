import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import {requestHandler} from '../requestHandler'

const middleware = [requestHandler, thunk];

const configureStore = compose(
    applyMiddleware(...middleware)
)(createStore);
export default configureStore