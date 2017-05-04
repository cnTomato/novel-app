import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions/catAction";
import Cat from "../components/cat"

@connect(mapStateToProps, mapDispatchToProps)
export default class CatCon extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        actions.initPage()
    }


    render() {
        const {actions, _i_stream} = this.props;
        try {
            return (
                <div>
                    <Cat _i_data={_i_stream}/>
                </div>
            )
        } catch (err) {
            console.log(err)
        }
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        _i_stream: state.catReducer
    };
}

function mapDispatchToProps(dispatch) {
    console.log(dispatch)
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}