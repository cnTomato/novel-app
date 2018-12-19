/*
 * Created by pan 2018-12-06
 */
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Tag, Icon } from "antd-mobile";
import "../assets/scss/cat.scss";
import Loading from "../components/Loading";

class Cat extends Component {
    state = {
        data: {},
        loading: false
    };
    
    componentDidMount(){
        this.setState({loading: true});
        document.title = "小说分类";
        axios({
            method: "GET",
            url: "/cat"
        }).then(res => {
            console.log(res);
            if(res.data.result === 1) {
                this.setState({data: {...this.state.data, ...res.data.data}});
            }
            this.setState({loading: false});
        });
    }
    
    render(){
        if(this.state.loading) {
            return <Loading/>;
        }
        return (
            <div className="cat">
                {
                    Object.entries(this.state.data).map((item, key) => (
                        <Card key={key} className="tag-container" full>
                            <Card.Header title={item[0]} extra={<Link
                                to={{pathname: "/list", search: `cate=${item[0]}&page=novel_choiceness`}}><Icon
                                type="right" size="md"/></Link>}/>
                            <Card.Body className="tags">
                                {
                                    item[1].map((v, k) => (
                                        <Tag selected key={k}><Link
                                            to={{
                                                pathname: "/source",
                                                search: `?text=${v.title}`
                                            }}>{v.title}</Link></Tag>
                                    ))
                                }
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        );
    }
}

export default Cat;
