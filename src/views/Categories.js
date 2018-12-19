/*
 * Created by pan 2018-12-13
 */
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { List } from "antd-mobile";
import Loading from "../components/Loading";

class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            error: false,
            data: {
                chapters: []
            }
        };
    }
    
    componentWillMount(){
        this.setState({loading: true});
        document.title = "小说目录";
        const params = require("query-string").parseUrl(this.props.location.search);
        axios({
            url: "/categories",
            method: "get",
            params: {
                id: params.query.id
            }
        }).then(res => {
            if(res.data.result === 1) {
                this.setState({data: Object.assign({}, this.state.data, res.data.data)});
            } else {
                this.setState({error: true});
                let t = 5;
                setInterval(() => {
                    this.setState({data: {chapters: [`没有找到相关资源<br/>${t--}秒后将返回上一步`]}});
                }, 1000);
                setTimeout(() => {
                    window.history.back();
                    clearInterval(t);
                }, 5000);
            }
            this.setState({loading: false});
        });
    }
    
    render(){
        if(this.state.loading) {
            return <Loading/>;
        }
        return <List className={this.state.error ? "categories empty" : "categories"}>
            {
                this.state.data.chapters.map((v, k) => {
                    return <List.Item key={k}><Link
                        to={{pathname: "/chapter", search: `?url=${v.link}`, params: this.state.data.chapters}}
                        style={{display: "block"}}>{v.title}</Link></List.Item>;
                })
            }
        </List>;
    }
}

export default Categories;
