/*
* Created by pan 2018/5/10
*/

import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import Chapter from "../compoents/chapterCom"
import * as actions from "../actions/chapterAction";
import Loading from "../common/Loading"
import PropTypes from "prop-types"
import db from "../db";

function mapStateToProps(state) {
    return {
        _i_data: state.chapterReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

class chapterCon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ""
        }
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        let url;
        try {
            url = this.context.router.route.location.state.chapterurl;
            console.log(url,"url router")
        } catch (e) {
            url = db.get("current").get("chapterurl").write();
            console.log(url,"storage url")
        }
        this.setState({
            url: url
        }, () => {
            this.props.actions.initPage({
                url: url
            })
        })
    }

    render() {
        const {_i_data, actions} = this.props;
        console.log(_i_data)
        if (_i_data.isFetching) {
            return <Loading/>
        } else {
            return <Chapter data={_i_data.data} actions={actions}/>
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(chapterCon));