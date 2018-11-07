/*
 * Created by pan 2018/11/3
 */
import React, { Component } from "react";
import { Layout } from "element-react";
import "../assets/header.scss";

class Header extends Component {
	constructor(props){
		super(props);
	}
	
	handleClick(){
		console.log("clicked");
	}
	
	render(){
		console.log(this.props.banner)
		return (
			<header className="header">
				<Layout.Row type="flex" justify="space-between">
					<Layout.Col span="12"><span>搜小说</span></Layout.Col>
					<Layout.Col span="12" className="search">
						<i className="el-icon-search" onClick={this.handleClick.bind(this)}/>
					</Layout.Col>
				</Layout.Row>
			</header>
		);
	}
}

export default Header;
