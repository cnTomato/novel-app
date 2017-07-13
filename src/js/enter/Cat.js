/**
 * Created by pan on 2017/6/16.
 */
import React, {Component} from "react";
import URL from "../common/conf"
import axios from "axios";
import {Link} from "react-router-dom"
import LoadingCom from "../common/loadingCom";

class Cat extends Component {
    constructor(props) {
        super(props);
        this.screenWidth = window.screen.width;
        this.screenHeight = window.screen.height;
        this.state = {
            isFetching: true,
            data: {}
        };
        this.initPage = this.initPage.bind(this);
    }
    
    componentWillMount() {
        this.initPage()
    }
    
    initPage() {
        let _this = this;
        axios.get(URL+"/cat").then(function (res) {
            let _data = res;
            _this.setState({
                isFetching: false,
                data: _data
            })
        }).catch(function (err) {
            console.log(err)
        })
    }
    
    render() {
        if (this.state.isFetching) {
            return <LoadingCom width={this.screenWidth} height={this.screenHeight}/>
        } else {
            return <CatCom data={this.state.data}/>
        }
    }
}

class CatCom extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="cat">
                <h2>男生小说</h2>
                <ListItem data={this.props.data.male}/>
                <h2>女生小说</h2>
                <ListItem data={this.props.data.female}/>
                <h2>传记</h2>
                <ListItem data={this.props.data.press}/>
            </div>
        )
    }
}

class ListItem extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <ul>
                {
                    this.props.data.map(function (v, k) {
                        return <li key={k}><Link to={{pathname:"searchResult",state:{text:v.name}}}><p className="name">{v.name}</p><p className="bookCount">{v.bookCount}</p></Link>
                        </li>
                    })
                }
            </ul>
        )
    }
}

export default Cat;