/**
 * Created by pan on 2017/6/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";

import App from "./app";

const render = Component => {
    try {
        ReactDOM.render(
            <AppContainer>
                <Component />
            </AppContainer>,
            document.getElementById('app')
        )
    } catch (err) {
        alert(err)
    }
    
};

render(App);

if (module.hot) {
    module.hot.accept('./app', () => {
        render(App)
    })
}

