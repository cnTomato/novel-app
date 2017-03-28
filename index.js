import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore, routerReducer} from "react-router-redux";
import reducer from "./reducers/indexReducer";
import Index from "./components/indexCom"
// import routes from "./routes"
// import {DatePicker, message} from "antd";
// import "antd/dist/antd.css"
// import "./index.less"

const store = createStore(
    combineReducers({
        ...reducer,
        routing: routerReducer
    })
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Index}>

            </Route>
        </Router>
    </Provider>,
    document.getElementById("app")
);
