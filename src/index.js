import React from "react";
import ReactDOM from "react-dom"
import {Provider} from 'react-redux';
import {Router, Route, } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {store, history} from "./store"
//pages
import indexCon from "./containers/indexCon";


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={indexCon}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();