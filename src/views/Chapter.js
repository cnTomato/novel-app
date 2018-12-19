/*
 * Created by pan 2018-12-13
 */
import React, { Component } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import "../assets/scss/chapter.scss";

class Chapter extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: "",
            error: false,
            loading: false,
            id: "",
            chapters: [],
            prev: "",
            next: ""
        };
    }
    
    componentWillMount(){
        let current = +localStorage.getItem("current");
        this.setState({chapters: JSON.parse(localStorage.getItem("chapters"))}, () => {
            this.setState({
                prev: this.state.chapters[current > 0 ? current - 1 : current].link,
                next: this.state.chapters[current < this.state.chapters.length ? current + 1 : current].link
            });
        });
    }
    
    componentDidMount(){
        const params = require("query-string").parseUrl(this.props.location.search);
        this.setState({id: params.query.id});
        this.init(params.query.url);
    }
    
    init(url){
        this.setState({loading: true});
        axios({
            url: "/chapter",
            method: "get",
            params: {
                url: url
            }
        }).then(res => {
            if(res.data.result === 1) {
                this.setState({data: res.data.data.replace(/\n/ig, "<hr/>")});
            } else {
                this.setState({error: true, data: `没有找到相关资源<br/>请返回小说来源重新选择小说来源`});
            }
            this.setState({loading: false});
        });
    }
    
    nav(type){
        let current = +localStorage.getItem("current");
        this.init(this.state[type]);
        localStorage.setItem("current", type === "prev" ? current > 0 ? current - 1 : current : current < this.state.chapters.length ? current + 1 : current);
        this.setState({
            prev: this.state.chapters[current > 0 ? current - 1 : current].link,
            next: this.state.chapters[current < this.state.chapters.length ? current + 1 : current].link
        });
    }
    
    render(){
        if(this.state.loading) {
            return <Loading/>;
        }
        return <React.Fragment>
            <div className={this.state.error ? "chapter empty" : "chapter"}
                 dangerouslySetInnerHTML={((self) => {
                     return {__html: self.state.data};
                 })(this)}></div>
            <div className="prev_next">
                <span onClick={this.nav.bind(this, "prev")}>上一章</span>
                <span onClick={() => this.props.history.push({
                    pathname: "/categories",
                    search: `?id=${this.state.id}`
                })}>目录</span>
                <span onClick={this.nav.bind(this, "next")}>下一章</span>
            </div>
        </React.Fragment>;
    }
}

export default Chapter;
