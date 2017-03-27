import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions/indexAction";
import {Index} from "../components/indexCom";

function mapStateToProps(state) {
    return {
        _i_stream: state.entrustReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

@connect(mapStateToProps, mapDispatchToProps)

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {_i_stream} = this.props;
        return (
            <div>
                <Index _i_list={_i_stream}/>
            </div>
        )
    }
}