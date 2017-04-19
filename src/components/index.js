import React, {Component} from 'react';
import { Route, Redirect } from 'react-router'
import PropTypes from 'prop-types';
import "../../less/index.less"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.inputSearch = this.inputSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    inputSearch(e) {
        console.log(e.target.value)
        this.setState({
            text: e.target.value
        })
    }

    handleSearch(){

        <Redirect to={{
            pathname: '/login',
                search: '?utm=your+face',
                state: { referrer: this.state.text }
        }}/>
    }

    render() {
        return (
            <div className="index">
                <h1>搜小说-拒绝广告</h1>
                <div className="input-group">
                    <input type="text" placeholder="搜小说、作者" onChange={this.inputSearch}/>
                    <button onClick={this.handleSearch}>搜索</button>
                </div>
                <div className="history">
                    <h2><em>搜索历史</em></h2>
                    <a href="">搜索</a>
                    <a href="">搜索</a>
                    <a href="">搜索</a>
                    <a href="">搜索</a>
                    <a href="">搜索</a>
                </div>
            </div>
        )
    }
}

Index.propTypes = {
    text: PropTypes.string
};

export default Index;
