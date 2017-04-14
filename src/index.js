import React, {Component} from "react";
import ReactDOM from "react-dom";
import "../less/common.less"

class Index extends Component {
    render() {
        return <h1>123</h1>
    }
}

ReactDOM.render(<Index/>, document.querySelector("#app"))