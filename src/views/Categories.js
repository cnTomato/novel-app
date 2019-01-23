/*
 * Created by pan 2018-12-13
 */
import React, { Component } from 'react';
import axios from 'axios';
import { List } from 'antd-mobile';
import Loading from '../components/Loading';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            id: '',
            data: {
                chapters: [],
            },
        };
    }

    componentWillMount() {
        console.log(this.props.history);
        this.setState({ loading: true });
        document.title = '小说目录';
        const params = require('query-string').parseUrl(
            this.props.location.search
        );
        this.setState({ id: params.query.id }, () => {
            this.init();
        });
    }

    init() {
        axios({
            url: '/categories',
            method: 'get',
            params: {
                id: this.state.id,
            },
        }).then(res => {
            if (res.data.result === 1) {
                localStorage.setItem(
                    'chapters',
                    JSON.stringify(res.data.data.chapters)
                );
                this.setState({
                    data: Object.assign({}, this.state.data, res.data.data),
                });
            } else {
                this.setState({
                    error: true,
                    data: { chapters: [`没有找到相关资源<br/>请返回上一步`] },
                });
            }
            this.setState({ loading: false });
        });
    }

    goChapter(obj) {
        console.log(obj);
        localStorage.setItem('current', obj.key);
        this.props.history.push({
            pathname: '/chapter',
            search: `?url=${obj.link}&id=${this.state.id}`,
        });
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }
        return (
            <List
                className={this.state.error ? 'categories empty' : 'categories'}
            >
                {this.state.data.chapters.map((v, k) => {
                    return (
                        <List.Item
                            key={k}
                            onClick={this.goChapter.bind(this, {
                                link: v.link,
                                key: k,
                            })}
                        >
                            {v.title}
                        </List.Item>
                    );
                })}
            </List>
        );
    }
}

export default Categories;
