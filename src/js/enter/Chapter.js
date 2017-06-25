/**
 * Created by pan on 2017/6/16.
 */
import React, {Component} from "react";
import axios from "axios";
import LoadingCom from "../common/loadingCom";

class Chapter extends Component {
    constructor(props) {
        super(props);
        this.screenWidth=window.screen.width;
        this.screenHeight=window.screen.height;
        this.state = {
            isFetching: true,
            booksInfo: this.props.location.state.booksInfo,
            sourceInfo: this.props.location.state.sourceInfo,
            chapterInfo: this.props.location.state.chapterInfo,
            data: {}
        };
        this.initPage = this.initPage.bind(this);
    }
    
    componentWillMount() {
        this.initPage()
    }
    
    initPage() {
        let _this = this;
        console.log(_this.state.chapterInfo)
        axios({
            method: "get",
            url: "http://139.199.189.12:3000/chapter",
            params: {
                link: _this.state.chapterInfo.link
            }
        }).then(function (res) {
            if (res.data.result === 1) {
                _this.setState({
                    isFetching: false,
                    data: res.data
                },function(){
                })
            }
        }).catch(function (err) {
            console.log(err)
        })
    }
    
    
    render() {
        if (this.state.isFetching) {
            return <div><LoadingCom width={this.screenWidth} height={this.screenHeight}/></div>
        } else {
            console.log(this.state.chapterInfo)
            let _con = this.state.data.content;
            return (
                <div className="chapter">
                    <h1>{this.state.data.title}</h1>
                    <div className="content" dangerouslySetInnerHTML={{__html: _con}}></div>
                </div>
            )
        }
    }
}

export default Chapter;