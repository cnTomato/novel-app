/**
 * Created by pan on 2017/6/16.
 */
import React, {Component} from "react";
import URL from "../common/conf"
import axios from "axios";
import {Link} from "react-router-dom";
import LoadingCom from "../common/loadingCom";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.screenWidth = window.screen.width;
        this.screenHeight = window.screen.height;
        this.state = {
            isFetching: true,
            booksInfo: this.props.location.state.booksInfo,
            sourceInfo: this.props.location.state.sourceInfo,
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
            url: URL + "/categories",
            params: {
                sourceid: _this.state.sourceInfo._id
            }
        }).then(function (res) {
            if (res.data.result === 1) {
                _this.setState({
                    isFetching: false,
                    data: res.data.data
                }, function () {
                    console.log(this.state.data)
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
            return <CategoriesCom
                data={this.state.data}
                booksInfo={this.state.booksInfo}
                sourceInfo={this.state.sourceInfo}
            />
        }
    }
}

class CategoriesCom extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="categories">
                <h1>{this.props.booksInfo.v.title}</h1>
                <p className="author">作者：{this.props.booksInfo.v.author}<span
                    className="line"></span>来源：{this.props.sourceInfo.name}</p>
                
                <ListItem data={this.props.data} booksInfo={this.props.booksInfo}
                          sourceInfo={this.props.sourceInfo}/>
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
        let _reverseData = JSON.parse(JSON.stringify(_this.props.data.chapters));
        return (
            <div className="chapters">
                <h3>最新章节</h3>
                <ul className="chapterList newst">
                    {
                        _reverseData.reverse().map(function (v, k, arr) {
                            if (k > 5) return false;
                            return <li key={k}><Link to={{
                                pathname: "/chapter",
                                state: {
                                    booksInfo: _this.props.booksInfo,
                                    sourceInfo: _this.props.sourceInfo,
                                    categoriesInfo: _this.props.data,
                                    chapterInfo: v,
                                    currentIndex: arr.length - k
                                }
                            }}>{v.title}</Link></li>
                        })
                    }
                </ul>
                <h3>章节目录</h3>
                <ul className="chapterList">
                    {
                        _this.props.data.chapters.map(function (v, k) {
                            return <li key={k}><Link to={{
                                pathname: "/chapter",
                                state: {
                                    booksInfo: _this.props.booksInfo,
                                    sourceInfo: _this.props.sourceInfo,
                                    categoriesInfo: _this.props.data,
                                    chapterInfo: v,
                                    currentIndex: k
                                }
                            }}>{v.title}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
        
    }
}

export default Categories;