import React, {Component} from 'react';
import axios from "axios"
import {Spin} from 'antd';

class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            list: [],
            data: {}
        };
        this.getData = this.getData.bind(this);
    }

    getData() {
        let _this = this;
        axios({
            method: "get",
            url: "/cats/lv2/statistics"
        }).then(function (res) {
            _this.setState({isFetching: false, data: res.data})
        }).catch(function (err) {
            console.log(err)
        });
    }

    componentWillMount() {
        this.getData();
    }

    render() {
        let {isFetching, data} = this.state;
        if (isFetching) {
            return (
                <Spin />
            )
        } else {
            return (
                <div className="cat">
                    <div className="male">
                        <h3>Male</h3>
                        <ListCom list={data.male}/>
                    </div>
                    <div className="female">
                        <h3>Female</h3>
                        <ListCom list={data.female}/>
                    </div>
                    <div className="press">
                        <h3>Press</h3>
                        <ListCom list={data.press}/>
                    </div>
                </div>
            );
        }
    }
}


class ListCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: this.props.list
        }
    }

    render() {
        return (
            <ul>
                {
                    this.props.list.map(function (v, k) {
                        console.log(v, k)
                        return <li key={k}><p>{v.name}</p><p>{v.bookCount}</p></li>
                    })
                }
            </ul>
        )
    }
}


export default Cat;

