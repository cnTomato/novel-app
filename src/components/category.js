import React, {Component} from 'react';
import { Route, Redirect } from 'react-router'
import PropTypes from 'prop-types';
import "../../less/index.scss"

class Category extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="index">
                Category
            </div>
        )
    }
}


export default Category;
