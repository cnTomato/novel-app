/*
* Created by pan 2018/5/10
*/

import React, {Component} from 'react';
import {LazyImage} from "react-lazy-images";
import "../assets/styles/bookinfo.css"
import PropTypes from "prop-types";
import db from "../db";

class Bookinfo extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    search(e) {
        let url = e.currentTarget.attributes["data-url"].value;
        db.set("current.chapterurl", url).write();
        this.context.router.history.push({pathname: "/chapter", state: {"url": url}})
    }

    render() {
        const {data} = this.props;
        return (
            <div className="page bookinfo">
                <div className="book-img">
                    <LazyImage
                        src={data.imgUrl}
                        alt={data.title}
                        placeholder={({alt}) => (
                            <img src="http://temp.im/754x754" alt={alt}/>
                        )}
                        actual={({src, alt, srcSet}) => <img src={src} alt={alt}/>}
                    />
                </div>
                <div className="book-intro">
                    <h1 className="title">{data.title}</h1>
                    <div className="author">{data.author}</div>
                    <div className="update-time">{data.updatetime}</div>
                    <div className="newchapter">{data.newchapter}</div>
                    <div className="intro">{data.intro}</div>
                </div>
                <div className="book-chapters">
                    {
                        data.chapters.map((v, k) => {
                            return <p key={k} data-url={v.url} onClick={this.search}>{v.title}</p>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Bookinfo;