import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import "../../less/index.scss"
import conf from "../config";

class Index extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            redirectTo: false,
            text: ''
        };
        this.inputSearch = this.inputSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    inputSearch(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleSearch() {
        this.setState({
            redirectTo: true
        })
    }

    render() {
        const {redirectTo} = this.state;
        const color=conf.getRandomColor();
        if (redirectTo) {
            return <Redirect to={{
                pathname: "/searchResult",
                state: {referrer: this.state.text}
            }}/>
        }

        return (
            <div className="index">
                <h1>搜小说-拒绝广告</h1>
                <div className="input-group">
                    <input type="text" placeholder="搜小说、作者" onChange={this.inputSearch}/>
                    <button onClick={this.handleSearch}>搜索</button>
                </div>
                <div className="history">
                    <h2><em>搜索历史</em></h2>
                    <a href="" style={{color}}>搜索</a>
                </div>
            </div>
        )
    }
}


export default Index;
