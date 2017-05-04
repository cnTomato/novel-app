import React, {Component} from 'react';
import { Route, Redirect } from 'react-router'
import PropTypes from 'prop-types';
import "../../less/index.scss"

class Sources extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="index">
                Sources
            </div>
        )
    }
}


export default Sources;
