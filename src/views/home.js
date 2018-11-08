/*
 * Created by pan 2018/11/3
 */
import React, { Component } from "react";
import { Layout, Carousel, Tabs } from "element-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { forIn } from "lodash";
import "../assets/home.scss";


class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			banner: [],
			cate_top: [],
			curr_sug: [],
			free: null,
			hot_list: [],
			new_sug: {}
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
				<Layout.Row gutter="15">
					<Layout.Col span="16" offset="4">
						<Carousel className="banner">
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
					</Layout.Col>
				</Layout.Row>
				<Layout.Row>
					<Layout.Col span="16" offset="4">
						<div className="hot_list list">
							<div className="title">热搜榜单<Link to="/hot_list">更多</Link></div>
							<Tabs activeName="1" onTabClick={(tab) => console.log(tab.props.name)}
							      className="hot_list_tab">
								{
									this.state.hot_list.map((item, index) => {
										let name = (index + 1).toString();
										return (
											<Tabs.Pane label={item.title} name={name} key={index}>
												<Layout.Row key={index} className="items" gutter="15">
													{
														item.data.map((obj, idx) => {
															return (
																<Layout.Col span="12" key={idx}>
																	<Layout.Row className="item" gutter="15">
																		<Layout.Col span="6" className="novel-pic">
																			<Link to="/search">
																				<img src={obj.icon} alt={obj.title}/>
																			</Link>
																		</Layout.Col>
																		<Layout.Col span="18" className="novel-detail">
																			<div
																				className="novel-title">{obj.title}</div>
																			<div className="novel-info">
																				<span>{obj.author}</span><span>{obj.cate}</span><span>{obj.status}</span>
																			</div>
																			<div className="novel-desc">{obj.des}</div>
																		</Layout.Col>
																	</Layout.Row>
																</Layout.Col>
															);
														})
													}
												</Layout.Row>
											</Tabs.Pane>
										);
									})
								}
							</Tabs>
						</div>
						<div className="cat_list list">
							<div className="title">分类排行<Link to="/cat_list">更多</Link></div>
							{
								this.state.cate_top.map((items, key) => {
									return (
										<Tabs activeName="1" className="cat_list_tab" key={key}>
											{
												Object.keys(items).map((i, j) => {
													let name = (j + 1).toString();
													return (
														<Tabs.Pane label={i} name={name} key={j}>
															<Layout.Row gutter="15">
																{
																	this.state.cate_top[key][i].map((m, n) => {
																		return (
																			<Layout.Col span="3" key={n}>
																				<div className="cat_list_item">
																					<div className="cat_list_pic">
																						<Link to="/"><img src={m.cover}
																						                  alt={m.title}/></Link>
																					</div>
																					<div className="cat_list_title">
																						{m.title}
																					</div>
																				</div>
																			</Layout.Col>
																		);
																	})
																}
															</Layout.Row>
														</Tabs.Pane>
													);
												})
											}
										</Tabs>
									
									);
								})
							}
						</div>
						<div className="cat_list list">
							<div className="title">本期推荐<Link to="/cat_list">更多</Link></div>
							<Tabs activeName="1" onTabClick={(tab) => console.log(tab.props.name)}
							      className="hot_list_tab">
								{
									this.state.curr_sug.map((item, index) => {
										let name = (index + 1).toString();
										return (
											<Tabs.Pane label={item.title} name={name} key={index}>
												<Layout.Row key={index} className="items" gutter="15">
													{
														item.data.map((obj, idx) => {
															return (
																<Layout.Col span="12" key={idx}>
																	<Layout.Row className="item" gutter="15">
																		<Layout.Col span="6" className="novel-pic">
																			<Link to="/search">
																				<img src={obj.cover} alt={obj.title}/>
																			</Link>
																		</Layout.Col>
																		<Layout.Col span="18" className="novel-detail">
																			<div
																				className="novel-title">{obj.title}</div>
																			<div className="novel-info">
																				<span>{obj.author}</span><span>{obj.cate}</span><span>{obj.status}</span>
																			</div>
																			<div className="novel-desc">{obj.des}</div>
																		</Layout.Col>
																	</Layout.Row>
																</Layout.Col>
															);
														})
													}
												</Layout.Row>
											</Tabs.Pane>
										);
									})
								}
							</Tabs>
						</div>
						<div className="new_sug_list list">
							<div className="title">新书推荐</div>
							<Tabs activeName="1" className="new_sug_tab cat_list_tab">
								{
									Object.keys(this.state.new_sug).map((item, key) => {
										return (
											<Tabs.Pane label={item} name={key.toString()} key={key}
											           className="cat_list_content">
												<Layout.Row key={key} gutter="15">
													{
														this.state.new_sug[item].map((obj, idx) => {
															return (
																<Layout.Col
																	span="4" key={idx}>
																	<div className="cat_list_item">
																		<div className="cat_list_pic">
																			<Link to="/"><img src={obj.cover}
																			                  alt=""/></Link>
																		</div>
																		<div className="cat_list_title">
																			{obj.title}
																		</div>
																	</div>
																</Layout.Col>
															);
														})
													}
												</Layout.Row>
											</Tabs.Pane>
										);
									})
								}
							</Tabs>
						</div>
					</Layout.Col>
				</Layout.Row>
			</div>
		);
	}
}

export default Home;
