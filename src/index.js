import React from "react";
import ReactDOM from "react-dom"
import {Provider} from 'react-redux';
import {Router, Route, Link} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {store, history} from "./store"
import Loadable from "react-loadable"
import Loading from "./common/Loading"
import db from "./db"
import "minireset.css";
import "./assets/styles/novel.css"
//pages
const index = Loadable({
    loader: () => import("./containers/indexCon"),
    loading: Loading
});
const cat = Loadable({
    loader: () => import("./containers/catCon"),
    loading: Loading
});
const sort = Loadable({
    loader: () => import("./containers/sortCon"),
    loading: Loading
});
const result = Loadable({
    loader: () => import("./containers/resultCon"),
    loading: Loading
});
const bookinfo = Loadable({
    loader: () => import("./containers/bookinfoCon"),
    loading: Loading
});
const chapter = Loadable({
    loader: () => import("./containers/chapterCon"),
    loading: Loading
});

db.defaults({current: {}, history: []}).write();
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div className="main">
                <nav className="sidebar">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="./">
                            <svg t="1525768925572" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                                <path
                                    d="M854.275 799.659v-42.565c0-58.774 145.094-106.417 85.836-106.417H167.584c-59.26 0-107.297 47.643-107.297 106.417v42.565c0 58.774 48.037 106.417 107.297 106.417h772.527c59.258 0-85.836-47.643-85.836-106.417z m-30.925 63.852H175.325c-39.83 0-72.119-31.763-72.119-70.946v-28.377c0-39.183 32.289-70.946 72.119-70.946H823.35c39.83 0-14.779 31.763-14.779 70.946v28.377c-0.001 39.183 54.609 70.946 14.779 70.946z m-485.5-510.806h495.844c59.258 0-85.836-47.643-85.836-106.417v-42.567c0-58.77 145.094-106.418 85.836-106.418H337.85c-59.258 0-107.294 47.647-107.294 106.418v42.567c-0.001 58.774 48.036 106.417 107.294 106.417z m-64.376-141.89c0-39.181 32.289-70.944 72.119-70.944h371.34c39.83 0-14.779 31.763-14.779 70.944v28.379c0 39.181 54.609 70.944 14.779 70.944h-371.34c-39.83 0-72.119-31.763-72.119-70.944v-28.379zM159.503 629.391h644.828c59.258 0 107.297-47.643 107.297-106.417v-42.567c0-58.772-48.039-106.415-107.297-106.415H159.503c-59.258 0 85.839 47.643 85.839 106.415v42.567c-0.001 58.774-145.097 106.417-85.839 106.417z m116.761-212.835h520.324c39.832 0 72.121 31.763 72.121 70.946v28.377c0 39.183-32.289 70.944-72.121 70.944H276.264c-39.83 0 14.779-31.761 14.779-70.944v-28.377c0-39.183-54.609-70.946-14.779-70.946z"
                                    p-id="3784" fill="#ffffff"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <a href="./">首页</a>
                        <Link to={{pathname: "/cat"}}>分类</Link>
                        <Link to={{pathname: "/sort"}}>排行榜</Link>
                    </div>
                </nav>
                <div className="content">
                    <Route exact path="/" component={index}/>
                    <Route path="/cat" component={cat}/>
                    <Route path="/sort" component={sort}/>
                    <Route path="/result" component={result}/>
                    <Route path="/bookinfo" component={bookinfo}/>
                    <Route path="/chapter" component={chapter}/>
                </div>
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();