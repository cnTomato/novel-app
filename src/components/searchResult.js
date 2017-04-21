import React, {Component} from 'react';
import {Route, Redirect} from 'react-router'
import PropTypes from 'prop-types';
import "../../less/index.less"

class SearchResult extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.state)
        // const {referrer} = this.state;
        return (
            <div className="index">
                searchresult
                {/*{*/}
                    {/*referrer*/}
                {/*}*/}
            </div>
        )
    }
}


export default SearchResult;
