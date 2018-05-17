/*
* Created by pan 2018/4/28
*
*/
import React, {Component} from 'react';
import {LazyImage} from "react-lazy-images";
import "../assets/styles/sort.css"
import db from "../db";
import PropTypes from "prop-types";

class Sort extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    search(title) {
        db.set("current.text", title).write();
        if (!db.get("history").write().includes(title)) db.get("history").push(title).write();
        this.context.router.history.push({pathname: "/result", state: {"text": title}})
    }

    render() {
        const {data} = this.props;
        return (
            <div className="page sort">
                {
                    data.map((v, k) => {
                        let cover = decodeURIComponent(v.cover);
                        return <div key={k} className="items" onClick={this.search.bind(this, v.title)}>
                            <div className="item-img">
                                <LazyImage
                                    src={cover.replace(/\/agent\//g, "")}
                                    alt={v.title}
                                    placeholder={({alt}) => (
                                        <img src="http://temp.im/754x754" alt={alt}/>
                                    )}
                                    actual={({src, alt, srcSet}) => <img src={src} alt={alt}/>}
                                />
                            </div>
                            <div className="item-content">
                                <h5 className="title">{v.title}</h5>
                                <div className="author">作者：<span>{v.author}</span></div>
                                <div className="major">类型：<span>{v.minorCate}</span></div>
                                <div className="rentation">留存率：<span>{v.retentionRatio + "%"}</span></div>
                                <div className="shortIntro">简介：{v.shortIntro}</div>
                            </div>
                        </div>
                    })
                }
            </div>

        );
    }
}


export default Sort;
