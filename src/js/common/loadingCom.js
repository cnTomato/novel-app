/**
 * Created by pan on 2017/6/18.
 */
import React, {Component} from "react";

export default class LoadingCom extends Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        const {width,height}=this.props;
        let _style={
            width:width,
            height:height
        };
        return(
            <div className="loading" style={_style}>
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        )
    }
}
