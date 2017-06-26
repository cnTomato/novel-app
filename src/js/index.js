/**
 * Created by pan on 2017/6/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import App from "./app";


ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
