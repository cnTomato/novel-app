/*
 * Created by pan 2018-12-12
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Icon, Card } from "antd-mobile";
import "../assets/scss/sort.scss";
import Loading from "../components/Loading";

class Sort extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            loading: false
        };
    }
    
    componentWillMount(){
        document.title = "热搜榜";
        this.setState({loading: true});
        axios({
            url: "/sort"
        }).then(res => {
            this.setState({data: {...this.data, ...res.data.data}});
            this.setState({loading: false});
        });
    }
    
    static formatNumber(v){
        return v.toString().length > 4 ? v / 1000 + "万" : v;
    }
    
    render(){
        if(this.state.loading) {
            return <Loading/>;
        }
        return (
            <div className="sort">
                {
                    Object.entries(this.state.data).map((item, key) => (
                        <Card key={key} className="sort-container" full>
                            <Card.Header title={item[0]} extra={<Link
                                to={{pathname: "/list", search: `?cate=${item[0]}&page=novel_choiceness`}}><Icon
                                type="right" size="md"/></Link>}/>
                            <Card.Body className="list">
                                {
                                    item[1].map((v, k) => (
                                        <Link to={{pathname: "/source", search: `?text=${v.title}`}}
                                              key={k}>{v.title}<span><em>{Sort.formatNumber(v.followers_num)}</em>人搜</span></Link>
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

export default Sort;
