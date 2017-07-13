/**
 * Created by pan on 2017/6/16.
 */
import React, {Component} from "react";
import Common from "../common/common";
import axios from "axios";
import URL from "../common/conf";
import LoadingCom from "../common/loadingCom";
import {Link, Redirect} from "react-router-dom";

class Index extends Component {
    constructor(props) {
        super(props);
        this.common = new Common();
        this.screenWidth = window.screen.width;
        this.screenHeight = window.screen.height;
        this.state = {
            isFetching: true,
            showNav: false,
            redirectTo: null,
            text: "",
            hotSearchWords: [],
            searchRecommend: [],
            historyList: [],
            colors: ["#93c6ef", "#c06cd1", "#f6bd82", "#6accb9", "#e58f90", "#93cfd4"]
        };
        this.handleClick = this.handleClick.bind(this);
        this.initPage = this.initPage.bind(this);
        this.clearHistory = this.clearHistory.bind(this);
    }
    
    componentWillMount() {
        this.initPage();
    }
    
    initPage() {
        let _this = this;
        axios.get(URL + "/hotSearchWords").then(function (res) {
            _this.setState({
                hotSearchWords: res.data.data
            });
        }).then(function () {
            axios.get(URL + "/searchRecommend").then(function (res) {
                _this.setState({
                    searchRecommend: res.data.data,
                    isFetching: false
                });
            })
        }).catch(function (err) {
            console.log(err)
        });
    }
    
    
    handleClick() {
        let _this = this;
        let searchText = document.querySelector(".search").value;
        let historyList = _this.common.getLocalStorage('historyList') ? _this.common.getLocalStorage('historyList').split(',') : [];
        if (searchText) {
            historyList.push(searchText);
            _this.setState({
                redirectTo: "/searchResult",
                text: searchText,
                historyList: historyList
            }, function () {
                _this.common.setLocalStorage('historyList', historyList)
            });
        } else {
            alert('请输入小说名、作者！');
        }
    }
    
    clearHistory() {
        this.setState({
            historyList: []
        }, function () {
            document.querySelector('#history').classList.add('hide');
            window.localStorage.clear();
        })
    }
    
    
    randomData(type) {
        let array = this.state[type];
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        this.setState({
            [type]: array
        })
    }
    
    render() {
        const _this = this;
        const {redirectTo, hotSearchWords, searchRecommend} = this.state;
        let historyList, showList = 'list';
        if (this.common.getLocalStorage('historyList')) {
            historyList = this.common.getLocalStorage('historyList').split(',');
        } else {
            historyList = [];
            showList = "list hide"
        }
        if (this.state.isFetching) {
            return <LoadingCom width={this.screenWidth} height={this.screenHeight}/>
        } else if (redirectTo) {
            return <Redirect push to={{pathname: redirectTo, state: {text: this.state.text}}}/>
        } else {
            return (
                <div className="index">
                    <h1>搜小说-拒绝广告</h1>
                    <div className="input-group">
                        <input type="text" placeholder="小说、作者" className="search"/>
                        <input type="button" value="Search" onClick={this.handleClick}/>
                    </div>
                    <div className="hotWords">
                        <h2>搜索热词<span ref="hot" onClick={this.randomData.bind(this, 'hotSearchWords')}><i></i>换一批</span>
                        </h2>
                        <ul className="list">
                            {
                                hotSearchWords.map(function (v, k) {
                                    if (k <= 20) {
                                        let color = _this.state.colors[Math.floor(Math.random() * 6)];
                                        return <li key={k} style={{"backgroundColor": color}}><Link
                                            to={{pathname: "/searchResult", state: {text: v.word}}}>{v.word}</Link></li>
                                    }
                                })
                            }
                        </ul>
                    </div>
                    <div className="hotWords">
                        <h2>热门推荐<span ref="recommend" onClick={this.randomData.bind(this, 'searchRecommend')}><i></i>换一批</span>
                        </h2>
                        <ul className="list">
                            {
                                searchRecommend.map(function (v, k) {
                                    if (k <= 20) {
                                        let color = _this.state.colors[Math.floor(Math.random() * 6)];
                                        return <li key={k} style={{"backgroundColor": color}}><Link
                                            to={{pathname: "/searchResult", state: {text: v}}}>{v}</Link></li>
                                    }
                                })
                            }
                        </ul>
                    </div>
                    <div className={showList} id="history">
                        <h2>搜索历史<span onClick={this.clearHistory}><i></i>清空</span></h2>
                        <ul className="list">
                            {
                                historyList.map(function (v, k) {
                                    if (k <= 20) {
                                        let color = _this.state.colors[Math.floor(Math.random() * 6)];
                                        return <li key={k} style={{"backgroundColor": color}}><Link
                                            to={{pathname: "/searchResult", state: {text: v}}}>{v}</Link></li>
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            )
        }
        
    }
}


export default Index;