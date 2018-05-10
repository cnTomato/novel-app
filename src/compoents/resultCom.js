/*
* Created by pan 2018/5/10
*
*/
import React, {Component} from 'react';
import {LazyImage} from "react-lazy-images";
import "../assets/styles/sort.css"
import PropTypes from "prop-types";
import db from "../db";

class Result extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    search(e) {
        let url = e.currentTarget.attributes["data-url"].value;
        db.set("current.url", url).write();
        // if (!db.get("history").write().includes(url)) db.get("history").push(key).write();
        this.context.router.history.push({pathname: "/bookInfo", state: {"url": url}})
    }

    render() {
        const {data} = this.props;
        return (
            <div className="page sort">
                {
                    data.map((v, k) => {
                        return <div key={k} className="items" onClick={this.search} data-url={v.url}>
                            <div className="item-img">
                                <LazyImage
                                    src={v.imgUrl}
                                    alt={v.title}
                                    placeholder={({alt}) => (
                                        <img src="http://temp.im/754x754" alt={alt}/>
                                    )}
                                    actual={({src, alt, srcSet}) => <img src={src} alt={alt}/>}
                                />
                            </div>
                            <div className="item-content">
                                <h5 className="title">{v.title}</h5>
                                <p className="author">{"作者：" + v.author}</p>
                                <p className="major">{"类型：" + v.type}</p>
                                <p className="shortIntro">{"简介：" + v.desc}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default Result;
