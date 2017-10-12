/**
 * Created by pan on 2017/6/16.
 */
import React, {Component} from "react";
import URL from "../common/conf"
import axios from "axios";
import LoadingCom from "../common/loadingCom";

class Chapter extends Component {
    constructor(props) {
        super(props);
        this.screenWidth = window.screen.width;
        this.screenHeight = window.screen.height;
        this.state = {
            isFetching: true,
            booksInfo: this.props.location.state.booksInfo,
            sourceInfo: this.props.location.state.sourceInfo,
            chapterInfo: this.props.location.state.chapterInfo,
            categoriesInfo: this.props.location.state.categoriesInfo,
            currentIndex: this.props.location.state.currentIndex,
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
            url: URL + "/chapter",
            params: {
                link: _this.state.chapterInfo.link
            }
        }).then(function (res) {
            if (res.data.result === 1) {
                _this.setState({
                    isFetching: false,
                    data: res.data
                }, function () {
                })
            }
        }).catch(function (err) {
            console.log(err)
        })
    }
    
    nextChapter() {
        if (this.state.currentIndex !== this.state.categoriesInfo.chapters.length) {
            this.setState({
                currentIndex: this.state.currentIndex + 1,
                chapterInfo: this.state.categoriesInfo.chapters[this.state.currentIndex],
            }, function () {
                this.initPage()
            })
        }
    }
    
    prevChapter() {
        if (this.state.currentIndex !== -1) {
            this.setState({
                currentIndex: this.state.currentIndex - 1,
                chapterInfo: this.state.categoriesInfo.chapters[this.state.currentIndex]
            }, function () {
                this.initPage()
            })
        }
    }
    
    render() {
        if (this.state.isFetching) {
            return <div><LoadingCom width={this.screenWidth} height={this.screenHeight}/></div>
        } else {
            let _con = this.state.data.content;
            return (
                <div className="chapter">
                    <h1>{this.state.data.title}</h1>
                    <div className="navLink">
                        <span onClick={this.prevChapter.bind(this)}>上一章</span>
                        <span onClick={this.nextChapter.bind(this)}>下一章</span>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{__html: _con}}></div>
                    <div className="navLink">
                        <span onClick={this.prevChapter.bind(this)}>上一章</span>
                        <span onClick={this.nextChapter.bind(this)}>下一章</span>
                    </div>
                </div>
            )
        }
    }
}

export default Chapter;