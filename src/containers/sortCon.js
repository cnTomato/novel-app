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
        this.changeSex = this.changeSex.bind(this);
        this.changeType = this.changeType.bind(this);
        this.loadData = this.loadData.bind(this);
        this.state = {
            sex: "male",
            type: "hot",
            id: "54d42d92321052167dfb75e3"
        }
    }

    changeSex(e) {
        let datatype = e.currentTarget.attributes['datatype'].value;
        Array.prototype.filter.call(e.currentTarget.parentNode.children, function (child) {
            if (child !== e) child.classList.remove("active");
            e.currentTarget.classList.add("active");
        });
        this.setState({
            sex: datatype
        }, () => {
            this.loadData(this.state.sex, this.state.type)
        })
    }

    changeType(e) {
        let datatype = e.currentTarget.attributes['datatype'].value;
        Array.prototype.filter.call(e.currentTarget.parentNode.children, function (child) {
            if (child !== e) child.classList.remove("active");
            e.currentTarget.classList.add("active");
        });
        this.setState({
            type: datatype
        }, () => {
            this.loadData(this.state.sex, this.state.type)
        })
    }

    loadData(sex, type) {
        if (sex === "male") {
            switch (type) {
                case "hot":
                    this.props.actions.initPage({id: "54d42d92321052167dfb75e3"});
                    break;
                case "best":
                    this.props.actions.initPage({id: "5a6844aafc84c2b8efaa6b6e"});
                    break;
                case "hotsearch":
                    this.props.actions.initPage({id: "5a6844f8fc84c2b8efaa8bc5"});
                    break;
                case "potential":
                    this.props.actions.initPage({id: "54d42e72d9de23382e6877fb"});
                    break;
                case "keep":
                    this.props.actions.initPage({id: "564547c694f1c6a144ec979b"});
                    break;
                case "finish":
                    this.props.actions.initPage({id: "564eb878efe5b8e745508fde"});
                    break;
            }
        } else {
            switch (type) {
                case "hot":
                    this.props.actions.initPage({id: "54d43437d47d13ff21cad58b"});
                    break;
                case "best":
                    this.props.actions.initPage({id: "5a684551fc84c2b8efaab179"});
                    break;
                case "hotsearch":
                    this.props.actions.initPage({id: "5a684515fc84c2b8efaa9875"});
                    break;
                case "potential":
                    this.props.actions.initPage({id: "54d43709fd6ec9ae04184aa5"});
                    break;
                case "keep":
                    this.props.actions.initPage({id: "5645482405b052fe70aeb1b5"});
                    break;
                case "finish":
                    this.props.actions.initPage({id: "564eb8a9cf77e9b25056162d"});
                    break;
            }
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
            return <div className="sort-tab">
                <div className="sort-tab-header">
                    <div className="sort-type" ref="sortType">
                        <span className="active" datatype="hot" onClick={this.changeType}>最热榜</span>
                        <span datatype="best" onClick={this.changeType}>好评榜</span>
                        <span datatype="hotsearch" onClick={this.changeType}>热搜榜</span>
                        <span datatype="potential" onClick={this.changeType}>潜力榜</span>
                        <span datatype="keep" onClick={this.changeType}>留存榜</span>
                        <span datatype="finish" onClick={this.changeType}>完结榜</span>
                    </div>
                    <div className="sort-sex" ref="sortSex">
                        <span className="active" datatype="male" onClick={this.changeSex}>男性</span>
                        <span datatype="female" onClick={this.changeSex}>女性</span>
                    </div>
                </div>
                <div className="sort-tab-content">
                    <Sort data={_i_data.data}/>
                </div>
            </div>
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(sortCon));
