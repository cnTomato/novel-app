/*
 * Created by pan 2018/11/3
 */
import React, { Component } from "react";
import { Menu,Layout } from "element-react";
import "../assets/header.scss";

class Header extends Component {
	render(){
		console.log(this.props.banner);
		return (
			<Layout.Row className="header" gutter="15">
				<Layout.Col span="4" offset="4" className="logo">
					搜小说
				</Layout.Col>
				<Layout.Col span="12">
					<Menu theme="dark" className="header" mode="horizontal">
						<Menu.Item index="1">分类</Menu.Item>
						<Menu.Item index="2">排行</Menu.Item>
						<Menu.Item index="3">连载</Menu.Item>
						<Menu.Item index="4">全本</Menu.Item>
					</Menu>
				</Layout.Col>
			</Layout.Row>
		);
	}
}

export default Header;
