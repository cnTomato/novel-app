/*
* Created by pan 2018/5/10
*/

import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import Result from "../compoents/resultCom"
import * as actions from "../actions/resultAction";
import Loading from "../common/Loading"
import PropTypes from "prop-types"
import db from "../db";

function mapStateToProps(state) {
    return {
        _i_data: state.resultReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

class resultCon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        let text;
        try {
            text = this.context.router.route.location.state.text;
        } catch (e) {
            text = db.get("current").get("text").write();
        }

        this.setState({
            text: text
        }, () => {
            this.props.actions.initPage({
                text: text
            })
        })
    }

    render() {
        const {_i_data} = this.props;
        if (_i_data.isFetching) {
            return <Loading/>
        } else {
            return <Result data={_i_data.data}/>
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(resultCon));
