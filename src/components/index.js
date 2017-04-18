import React, {Component} from 'react';
import "../../less/index.less"

class Index extends Component {

    render() {
        return (
            <div className="index">
                <h1>搜小说-拒绝广告</h1>
                <div className="input-group">
                    <input type="text" placeholder="搜小说、作者"/>
                    <button>搜索</button>
                </div>
                <div className="history">
                    <h2><em>搜索历史</em></h2>
                    <a href="">搜索</a>
                    <a href="">搜索</a>
                    <a href="">搜索</a>
                    <a href="">搜索</a>
                    <a href="">搜索</a>
                </div>
            </div>
        )
    }
}

export default Index;
