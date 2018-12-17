/*
 * Created by pan 2018-12-13
 */
import React, { Component } from "react";
import axios from "axios";

class Chapter extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: "",
            error: false
        };
    }
    
    componentDidMount(){
        const params = require("query-string").parseUrl(this.props.location.search);
        axios({
            url: "/chapter",
            method: "get",
            params: {
                url: params.query.url
            }
        }).then(res => {
            if(res.data.result === 1) {
                this.setState({data: res.data.data.replace(/\n/ig, "<hr/>")});
            } else {
                this.setState({error: true});
                let t = 5;
                setInterval(() => {
                    this.setState({data: `没有找到相关资源<br/>${t--}秒后将回到小说来源`});
                }, 1000);
                setTimeout(() => {
                    window.history.go(-2);
                    clearInterval(t);
                }, 5000);
            }
        });
    }
    
    render(){
        return <div style={{
            backgroundColor: "#fff",
            padding: "15px",
            fontSize: "15px"
        }} className={this.state.error ? "chapter empty" : "chapter"}
                    dangerouslySetInnerHTML={((self) => {
                        return {__html: self.state.data};
                    })(this)}></div>;
    }
}

export default Chapter;
