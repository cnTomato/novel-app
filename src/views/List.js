/*
 * Created by pan 2018-12-06
 */
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Flex, ActivityIndicator } from "antd-mobile";
import "../assets/scss/catSort.scss";

class List extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            isFetching: true,
            data: [],
            pg: 1,
            page: "novel_sort",
            cate: "玄幻",
            count: 15,
            prevY: 0,
            hasMore: false
        };
    }
    
    fetchData(){
        this.setState({isFetching: true});
        axios({
            method: "GET",
            url: "/hot",
            params: {
                cate: this.state.cate,
                pg: this.state.pg,
                count: this.state.count,
                page: this.state.page,
            }
        }).then(res => {
            console.log(res);
            if(res.data.result === 1) {
                console.log(res.data.data);
                this.setState({data: [...this.state.data, ...res.data.data.list]});
                this.setState({hasMore: res.data.data.hasMore});
                this.setState({isFetching: false});
            }
        });
    }
    
    handleObserver(entities, observer){
        const y = entities[0].boundingClientRect.y;
        if(this.state.prevY > y) {
            this.setState({pg: this.state.pg + 1});
            this.fetchData();
        }
        this.setState({prevY: y});
    }
    
    componentWillMount(){
        const params = require("query-string").parseUrl(this.props.location.search);
        this.setState({
            cate: params.query.cate,
            page: params.query.page
        },()=>{
            this.fetchData();
        });
    }
    
    componentDidMount(){
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this),
            options
        );
        this.observer.observe(this.loadingRef);
    }
    
    render(){
        return (
            <div className="infinite-scroll">
                <div className="items" style={{minHeight: "100vh"}}>
                    {
                        this.state.data.map((item, key) => (
                            <Link key={key} to={{pathname: "/source", search: `?text=${item.title}`}}>
                                <Flex className="item" align="start">
                                    <Flex.Item className="avatar">
                                        <img src={item.cover || item.icon} alt={item.title}/>
                                    </Flex.Item>
                                    <Flex.Item className="detail">
                                        <h3>{item.title}</h3>
                                        <p className="info">
                                            <span>{item.author}</span><span>{item.cate}</span><span>{item.status}</span>
                                        </p>
                                        <p className="des">{item.des}</p>
                                    </Flex.Item>
                                </Flex>
                            </Link>
                        ))
                    }
                </div>
                <div
                    ref={loadingRef => (this.loadingRef = loadingRef)}
                    className="loading-status"
                >
                    <ActivityIndicator
                        text="加载中..."
                        animating={this.state.isFetching}
                    />
                    <ActivityIndicator
                        text="我是有底线的"
                        animating={!this.state.hasMore}
                    />
                </div>
            </div>
        );
    }
}

export default List;
