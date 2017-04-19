import React, {Component} from 'react';
import { Route, Redirect } from 'react-router'
import PropTypes from 'prop-types';
import "../../less/index.less"

class Chapter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="index">
                Chapter
            </div>
        )
    }
}


export default Chapter;
