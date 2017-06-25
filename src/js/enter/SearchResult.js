/**
 * Created by pan on 2017/6/16.
 */

import React, {Component} from "react";
import axios from "axios";
import {Link, Redirect} from "react-router-dom";
import LoadingCom from "../common/loadingCom";

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.screenWidth = window.screen.width;
        this.screenHeight = window.screen.height;
        this.state = {
            isFetching: true,
            data:{},
            text: this.props.location.state.text
        };
        this.initPage = this.initPage.bind(this);
    }
    
    componentWillMount() {
        this.initPage()
    }
    
    initPage() {
        let _this = this;
        axios({
            method: "get",
            url: "http://139.199.189.12:3000/searchResult",
            params: {
                text: _this.state.text
            }
        }).then(function (res) {
            if (res.data.result === 1) {
                _this.setState({
                    isFetching: false,
                    data: res.data.data.books
                })
            }
        }).catch(function (err) {
            console.log(err)
        })
    }
    
    render() {
        if (this.state.isFetching) {
            return <LoadingCom width={this.screenWidth} height={this.screenHeight}/>
        } else {
            if (this.state.redirectTo) {
                return <Redirect push to={{
                    pathname: this.state.redirectTo,
                    state: {
                        booksInfo: this.state.booksInfo,
                        text: this.state.text
                    }
                }}/>
            } else {
                return <SearchResultCom text={this.state.text} data={this.state.data}/>
            }
        }
    }
}

class SearchResultCom extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="searchResult">
                <h1>关于『{this.props.text}』小说</h1>
                <ListItem goto={this.props.goto} data={this.props.data}/>
            </div>
        )
    }
}

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorImg: 'http://temp.im/120x150'
        };
        this.imgError = this.imgError.bind(this)
    }
    
    imgError(e) {
        e.target.setAttribute("src", this.state.errorImg)
    }
    
    render() {
        let _this = this;
        return (
            <ul className="booklist">
                {
                    _this.props.data.map(function (v, k) {
                        let imgSrc = "https://statics.zhuishushenqi.com" + v.cover;
                        return <li key={k} data-index={k}>
                            <Link to={{pathname: "/sources", state: {v}}}>
                                <div className="bookpic"><img src={imgSrc} alt={v.title} onError={_this.imgError}/>
                                </div>
                                <div className="bookinfo">
                                    <div className="name">{v.title}</div>
                                    <div className="author">{v.author}</div>
                                    <div className="shortIntro">{v.shortIntro}</div>
                                    <div className="rate">
                                        <span><em>{v.latelyFollower}</em>人气</span><span
                                        className="line">|</span><span><em>{v.retentionRatio}%</em>留存</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    })
                }
            </ul>
        )
    }
}

export default SearchResult;