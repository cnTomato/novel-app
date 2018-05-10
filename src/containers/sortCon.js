/*
* Created by pan 2018/4/28
*
*/

import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import Sort from "../compoents/sortCom"
import * as actions from "../actions/sortAction";
import Loading from "../common/Loading"

function mapStateToProps(state) {
    return {
        _i_data: state.sortReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

class sortCon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            id: "5a6844aafc84c2b8efaa6b6e"
        }
    }

    componentWillMount() {
        this.props.actions.initPage({id: this.state.id})
    }

    render() {
        const {_i_data} = this.props;
        console.log(_i_data)
        if (_i_data.isFetching) {
            return <Loading/>
        } else {
            return <Sort data={_i_data.data}/>
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(sortCon));
