/*
* Created by pan 2018/5/10
*/

import React, {Component} from 'react';
import "../assets/styles/chapter.css"
import PropTypes from "prop-types";
import db from "../db";

class Chapter extends Component {
    constructor(props) {
        super(props);
        this.gocategories = this.gocategories.bind(this);
        this.goprev = this.goprev.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    goprev(e) {
        const {actions} = this.props;
        let url = e.currentTarget.attributes["data-url"].value;
        if (url.indexOf(".html")) {
            db.set("current.chapterurl", url).write();
            actions.initPage({
                url: url
            });
        }
    }

    gocategories(e) {
        let url = e.currentTarget.attributes["data-url"].value;
        this.context.router.history.push({pathname: "/bookInfo", state: {url: url+"/"}})
    }

    render() {
        const {data} = this.props;
        const _html = () => {
            return {__html: data.data ? data.data.replace(/\s/ig, "") : ""}
        };
        return (
            <div className="page chapter">
                <h1 className="title">{data.title}</h1>
                <div className="author">{data.author}|<span data-url={data.categories}
                                                            onClick={this.gocategories}>目录</span></div>
                <div className="chapter-content" dangerouslySetInnerHTML={_html()}/>
                <div className="prev" data-url={data.prev} onClick={this.goprev}/>
                <div className="next" data-url={data.next} onClick={this.goprev}/>
            </div>
        );
    }
}

export default Chapter;