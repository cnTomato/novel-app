import {createLogger} from 'redux-logger'
import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import {routerMiddleware} from 'react-router-redux';
import novelReducer from "./reducers/novelReducer";

const loggerMiddleware = createLogger()

export const history = createHistory();

export const store = createStore(
    novelReducer,
    undefined,
    compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware, routerMiddleware(history)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

