import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore, routerReducer} from "react-router-redux";
import reducers from "./reducers/indexReducer";
import routes from "./routes"

const store = createStore(
    combineReducers({
        reducers,
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}></Router>
    </Provider>,
    document.getElementById('app')
)