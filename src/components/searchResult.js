import React, {Component} from 'react';
import {Route, Redirect} from 'react-router'
import PropTypes from 'prop-types';
import "../../less/index.scss"

class SearchResult extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.state)
        // const {referrer} = this.props.state;
        return (
            <div className="index">
                searchresult
            </div>
        )
    }
}


export default SearchResult;
