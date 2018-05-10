import React, {Component} from 'react';
import PropTypes from "prop-types";
import "../assets/styles/index.css"

import db from "../db.js"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: ""
        }
    }

    static contextTypes = {
        router: PropTypes.object
    };

    search(e) {
        let key = e.currentTarget.attributes["data-value"].value;
        db.set("current.text", key).write();
        if (!db.get("history").write().includes(key)) db.get("history").push(key).write();
        this.context.router.history.push({pathname: "/result", state: {"text": key}})
    }

    render() {
        const {hotwords, recwords} = this.props;
        return (
            <div className="page index">
                <h1 className="title">搜小说</h1>
                <div className="control">
                    <input className="input" type="text" placeholder="搜小说/作者"/>
                </div>
                <div className="tags">
                    <div className="tag-title"><h2>热门搜索</h2></div>
                    <div className="tag-list">
                        {
                            hotwords.map((v, k) => {
                                if (k < 40) return <span className="tag-item" key={k}
                                                         onClick={this.search.bind(this)}
                                                         data-value={v.word}>{v.word}</span>
                            })
                        }
                    </div>
                    <div className="tag-title"><h2>搜索推荐</h2></div>
                    <div className="tag-list">
                        {
                            recwords.map((v, k) => {
                                return <span className="tag-item" key={k} onClick={this.search.bind(this)}
                                             data-value={v}>{v}</span>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
