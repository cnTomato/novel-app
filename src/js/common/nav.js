/**
 * Created by pan on 2017/7/4.
 */
import React, {Component} from "react";

export default class NavCom extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isShow: this.props.location.state.showNav
        }
    }
    
    render() {
        return (
            <div className="nav">
                <a href="">123</a>
                <a href="">123</a>
                <a href="">123</a>
            </div>
        )
    }
}
