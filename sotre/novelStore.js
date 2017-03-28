import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import rootReducer from '../reducers/indexReducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(
    thunk
)(createStore);

export default function configureStore(initialState) {
    return middleware(rootReducer, initialState)
}
