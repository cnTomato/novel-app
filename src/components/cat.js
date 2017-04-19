import React, {Component} from 'react';
import { Route, Redirect } from 'react-router'
import PropTypes from 'prop-types';
import "../../less/index.less"

class Cat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="index">
                Cat
            </div>
        )
    }
}


export default Cat;
