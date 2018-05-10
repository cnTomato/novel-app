/*
* Created by pan 2018/4/25
*
*/

import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import Cat from "../compoents/catCom"
import * as actions from "../actions/catAction";
import Loading from "../common/Loading"

function mapStateToProps(state) {
    return {
        _i_data: state.catReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

class catCon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentWillMount() {
        this.props.actions.initPage()
    }

    render() {
        const {_i_data} = this.props;
        console.log(_i_data)
        if (_i_data.isFetching) {
            return <Loading/>
        } else {
            return <Cat data={_i_data.data}/>
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(catCon));
