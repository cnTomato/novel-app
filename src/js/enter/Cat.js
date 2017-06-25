/**
 * Created by pan on 2017/6/16.
 */
import React, {Component} from "react";
import axios from "axios";

class Cat extends Component {
    constructor(props) {
        super(props);
        this.type = "spin";
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
        axios.get("http://139.199.189.12:3000/cat").then(function (res) {
            let _data = JSON.parse(res.data.data);
            _this.setState({
                isFetching: false,
                data: _data
            })
        }).catch(function (err) {
            console.log(err)
        })
    }
    
    render() {
        let _dom;
        if (this.state.isFetching) {
            _dom = <Loading type={this.type} height={48} width={48}/>
        } else {
            _dom = <CatCom data={this.state.data}/>
        }
        
        return (
            <div>
                {_dom}
            </div>
        )
    }
}

class CatCom extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(this.props)
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
                        return <li key={k}><p className="name">{v.name}</p><p className="bookCount">{v.bookCount}</p>
                        </li>
                    })
                }
            </ul>
        )
    }
}

export default Cat;