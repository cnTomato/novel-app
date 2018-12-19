/*
 * Created by pan 2018-12-04
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Flex, Carousel, WhiteSpace, Card, Tabs } from "antd-mobile";
import BookItem from "../components/BookItem";
import axios from "axios";
import Icon from "../components/Icon";
import "../assets/scss/home.scss";
import Loading from "../components/Loading";

class Home extends Component {
    state = {
        data: {
            banner: [],
            cate_top: [],
            curr_sug: [],
            free: [],
            hot_list: [],
            new_sug: {}
        },
        hot_tabs: [
            {title: "男生", sub: "1"},
            {title: "女生", sub: "2"}
        ],
        loading: false,
        imgHeight: 143,
    };
    
    componentWillMount(){
        document.title = "首页";
        this.setState({loading: true});
        axios({
            url: "/",
            method: "GET"
        }).then(res => {
            this.setState({data: {...this.state.data, ...res.data.data}});
            this.setState({loading: false});
        });
    }
    
    
    render(){
        if(this.state.loading){
            return <Loading/>
        }
        return <React.Fragment>
            {/*banner*/}
            <Banner data={this.state.data.banner}/>
            {/*nav*/}
            <Nav/>
            
            <Card full className="free">
                <Card.Header title="全网免费"/>
                <Card.Body>
                    {
                        this.state.data.free.map((v, k) => (
                                <Link key={k} to={{pathname: "/source", search: `?text=${v.title}`}}>
                                    <img src={v.cover || v.icon} alt={v.title}/>
                                    <span>{v.title}</span>
                                </Link>
                            )
                        )
                    }
                </Card.Body>
            </Card>
            
            <WhiteSpace size="lg"/>
            
            <Tab title="热门搜索" tabs={this.state.hot_tabs} data={this.state.data.hot_list}/>
            
            <Tab title="本期推荐" tabs={this.state.hot_tabs} data={this.state.data.curr_sug}/>
            
            <Card full className="recommend">
                <Card.Header title="新书推荐"/>
                <Card.Body>
                    <Tabs tabs={[
                        {title: "玄幻", sub: "1"},
                        {title: "都市", sub: "2"},
                        {title: "悬疑", sub: "3"},
                        {title: "豪门", sub: "4"},
                        {title: "穿越", sub: "5"}
                    ]}
                          initialPage={0}
                    >
                        
                        {
                            Object.values(this.state.data.new_sug).map((item, key) => (
                                <Flex key={key} className="recommend--item">
                                    {
                                        item.map((v, k) => (
                                            <Flex.Item className="item" key={k}>
                                                <Link
                                                    to={{pathname: "/source", search: `?text=${v.title}`}}>
                                                    <img src={v.cover} alt={v.title}/>
                                                    <span>{v.title}</span>
                                                </Link>
                                            </Flex.Item>
                                        ))
                                    }
                                </Flex>
                            ))
                        }
                    </Tabs>
                </Card.Body>
            </Card>
        </React.Fragment>;
    }
}

class Banner extends Home {
    render(){
        return <React.Fragment>
            <Carousel
                autoplay={true}
                infinite
            >
                {this.props.data.map((v, k) => (
                    <Link
                        key={k}
                        to={{pathname: "/source", search: `?text=${v.title}`}}
                        style={{display: "inline-block", width: "100%", height: this.state.imgHeight}}
                    >
                        <img
                            src={v.icon}
                            alt={v.title}
                            style={{width: "100%", verticalAlign: "top"}}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event("resize"));
                                this.setState({imgHeight: "auto"});
                            }}
                        />
                    </Link>
                ))}
            </Carousel>
        </React.Fragment>;
    }
}

const Nav = () => (
    <React.Fragment>
        <Card full>
            <Card.Body>
                <Flex className="navbar">
                    <Flex.Item>
                        <Link to={{pathname: "/cat"}}><Icon name="cat"/>分类</Link>
                    </Flex.Item>
                    <Flex.Item>
                        <Link to={{pathname: "/sort", search: "?cate=排行&page=novel_choiceness"}}><Icon
                            name="sort"/>排行</Link>
                    </Flex.Item>
                    <Flex.Item>
                        <Link to={{pathname: "/list", search: "?cate=连载&page=novel_choiceness"}}><Icon
                            name="serial"/>连载</Link>
                    </Flex.Item>
                    <Flex.Item>
                        <Link to={{pathname: "/list", search: "?cate=完结&page=novel_choiceness"}}><Icon
                            name="complete"/>全本</Link>
                    </Flex.Item>
                    <Flex.Item>
                        <Link to={{pathname: "/list", search: "?cate=free&page=novel_choiceness"}}><Icon
                            name="free"/>免费</Link>
                    </Flex.Item>
                </Flex>
            </Card.Body>
        </Card>
        <WhiteSpace size="lg"/>
    </React.Fragment>
);


class Tab extends Home {
    render(){
        return <React.Fragment>
            <Card full className="hot">
                <Card.Header title={this.props.title}/>
                <Card.Body>
                    <Tabs tabs={this.props.tabs}
                          initialPage={0}
                    >
                        {
                            this.props.data.map((item, key) => (
                                <div key={key} className="hot_list--item">
                                    {
                                        item.data.map((v, k) => (
                                            <Link key={k}
                                                  to={{pathname: "/source", search: `?text=${v.title}`}}>
                                                <BookItem data={v}/>
                                            </Link>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </Tabs>
                </Card.Body>
            </Card>
            <WhiteSpace size="lg"/>
        </React.Fragment>;
    }
}

export default Home;
