import React from "react";
import ReactDOM from "react-dom";
import "antd-mobile/dist/antd-mobile.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://novel.steps.info";
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
serviceWorker.unregister();
