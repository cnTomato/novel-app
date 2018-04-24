import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import Index from "../compoents/index"
import * as actions from "../actions/indexAction";

function mapStateToProps(state) {
    return {
        _i_data: state.indexReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

class indexCon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentWillMount() {
        this.props.actions.initPage()
    }

    render() {
        const {_i_data} = this.props;
        console.log(_i_data,"_i_data")
        return <div><Index/></div>
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(indexCon));
