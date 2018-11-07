/*
 * Created by pan 2018/11/3
 */
import React, { Component } from "react";
import { Layout, Carousel, Tabs } from "element-react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/home.scss";


class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			banner: [],
			cate_top: null,
			curr_sug: null,
			free: null,
			hot_list: [],
			new_sug: null
		};
	}
	
	componentWillMount(){
		axios.get("http://localhost:3001/").then(res => {
			const {banner, cate_top, curr_sug, free, hot_list, new_sug} = res.data.data;
			this.setState({
				banner: banner,
				cate_top: cate_top,
				curr_sug: curr_sug,
				free: free,
				hot_list: hot_list,
				new_sug: new_sug
			});
		});
	}
	
	render(){
		return (
			<div className='home'>
				<Carousel height="144px" className="banner">
					{
						this.state.banner.map((item, index) => {
							return (
								<Carousel.Item key={index}>
									<Link to="/search">
										<img src={item.icon} alt={item.title}/>
									</Link>
								</Carousel.Item>
							);
						})
					}
				</Carousel>
				<div className="nav">
					<Link to="/cat"><i className="icon-font">&#xe600;</i>分类</Link>
					<Link to="/sort"><i className="icon-font">&#xe66e;</i>排行</Link>
					<Link to="/series"><i className="icon-font">&#xe68c;</i>连载</Link>
					<Link to="/complete"><i className="icon-font">&#xe692;</i>全本</Link>
				</div>
				<div className="hot_list">
					<div className="title">热搜榜单<Link to="/hot_list">更多</Link></div>
					<Tabs activeName="1" onTabClick={(tab) => console.log(tab.props.name)} className="hot_list_tab">
						{
							this.state.hot_list.map((item, index) => {
								let name = (index + 1).toString();
								return (
									<Tabs.Pane label={item.title} name={name} key={index}>
										{
											item.data.map((obj, idx) => {
												return (
													<Layout.Row key={idx} className="item" gutter="15">
														<Layout.Col span="8" className="novel-pic">
															<Link to="/search">
																<img src={obj.icon} alt={obj.title}/>
															</Link>
														</Layout.Col>
														<Layout.Col span="16" className="novel-detail">
															<div className="novel-title">{obj.title}</div>
															<div className="novel-info">
																<span>{obj.author}</span><span>{obj.cate}</span><span>{obj.status}</span>
															</div>
															<div className="novel-desc">{obj.des}</div>
														</Layout.Col>
													</Layout.Row>
												);
											})
										}
									</Tabs.Pane>
								);
							})
						}
					</Tabs>
				</div>
			</div>
		);
	}
}

export default Home;
