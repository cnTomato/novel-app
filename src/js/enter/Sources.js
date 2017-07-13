/**
 * Created by pan on 2017/6/16.
 */
import React, {Component} from "react";
import URL from "../common/conf"
import axios from "axios";
import {Link} from "react-router-dom";
import LoadingCom from "../common/loadingCom";

class Sources extends Component {
    constructor(props) {
        super(props);
        this.screenWidth = window.screen.width;
        this.screenHeight = window.screen.height;
        this.state = {
            isFetching: true,
            booksInfo: this.props.location.state,
            data: {}
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
            url: URL+"/sources",
            params: {
                bookid: _this.state.booksInfo.v._id
            }
        }).then(function (res) {
            if (res.data.result === 1) {
                _this.setState({
                    isFetching: false,
                    data: res.data.data
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
            return <SourcesCom data={this.state.data} booksInfo={this.state.booksInfo}/>
        }
    }
}

class SourcesCom extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="sources">
                <h1>『选择书源』</h1>
                <ListItem data={this.props.data} booksInfo={this.props.booksInfo}/>
            </div>
        )
    }
}

class ListItem extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let _this = this;
        return (
            <ul>
                {
                    this.props.data.map(function (v, k) {
                        if (!v.starting) {
                            let updated = v.updated.replace(/[A-Z]/g, " ").split(".")[0];
                            return <li key={k} data-index={k}>
                                    <Link to={{pathname:"/categories",state:{booksInfo:_this.props.booksInfo,sourceInfo:v}}}>
                                        <p className="name">来源网站：{v.name}</p>
                                        <p className="updated">更新时间：<em>{updated}</em></p>
                                        <p className="lastChapter">最新章节：<em>{v.lastChapter}</em></p>
                                        <p className="chaptersCount">总字数：<em>{v.chaptersCount}万</em></p>
                                    </Link>
                                </li>
                        }
                    })
                }
            </ul>
        )
    }
}

export default Sources;