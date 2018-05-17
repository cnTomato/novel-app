/*
* Created by pan 2018/5/10
*/

import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import Bookinfo from "../compoents/bookinfoCom"
import * as actions from "../actions/bookinfoAction";
import Loading from "../common/Loading"
import PropTypes from "prop-types"
import db from "../db";

function mapStateToProps(state) {
    return {
        _i_book: state.bookinfoReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

class bookinfoCon extends Component {
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
            url = this.context.router.route.location.state.url;
        } catch (e) {
            url = db.get("current").get("url").write();
        }

        this.setState({
            url: url
        }, () => {
            this.props.actions.initPage({
                url: url
            });
        })
    }

    render() {
        const {_i_book} = this.props;

        console.log(this.props)
        if (_i_book.isFetching) {
            return <Loading/>
        } else {
            return <Bookinfo data={_i_book.data}/>
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(bookinfoCon));