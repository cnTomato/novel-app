import React, { Component } from "react";
import { Router } from "react-router-dom";
import { Routes } from "./routes";
import createHashHistory from "history/createHashHistory";
import { Icon, NavBar, SearchBar } from "antd-mobile";
import "./assets/scss/global.scss";

const history = createHashHistory();

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            path: "",
            title: "首页",
            value: "官梯",
            showSearch: false
        };
    }
    
    componentWillMount(){
        this.setTitle(history.location.pathname);
    }
    
    componentDidMount(){
        history.listen((location, action) => {
            this.setTitle(location.pathname);
        });
    }
    
    setTitle(name){
        this.setState({path: name});
        switch(name) {
            case "/home":
                this.setState({title: "首页"});
                break;
            case "/cat":
                this.setState({title: "分类"});
                break;
            case "/list":
                this.setState({title: "列表"});
                break;
            case "/sort":
                this.setState({title: "排行"});
                break;
            case "/chapter":
                this.setState({title: "章节"});
                break;
            case "/categories":
                this.setState({title: "目录"});
                break;
            case "/source":
                this.setState({title: "小说来源"});
                break;
            default:
                this.setState({title: "首页"});
                break;
        }
    }
    
    onChange = (value) => {
        this.setState({value});
    };
    
    onSubmit = (value) => {
        this.setState({showSearch: false}, () => {
            history.push(`/source?text=${value}`);
        });
    };
    
    render(){
        return <React.Fragment>
            <NavBar
                mode="dark"
                icon={this.state.path === "/home" || this.state.path === "/" ? "" : <Icon type="left"/>}
                onLeftClick={() => history.goBack()}
                rightContent={
                    <Icon key="0" type="search" onClick={() => {
                        this.setState({showSearch: !this.state.showSearch});
                    }}/>
                }
            >{this.state.title}</NavBar>
            <SearchBar
                value={this.state.value}
                placeholder="Search"
                onSubmit={this.onSubmit}
                onCancel={() => this.setState({showSearch: false})}
                showCancelButton
                onChange={this.onChange}
                className={this.state.showSearch ? "show" : ""}
            />
            <Router history={history}>
                <Routes/>
            </Router>
        </React.Fragment>;
        
    }
}

export default App;
