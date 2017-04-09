import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Index from "../actions/index"
import SearchResult from "../actions/searchResult"
import Sources from "../actions/sources"
import Categories from "../actions/categories"
import Chapters from "../actions/chapters"
import Cat from "../actions/cat"

const routes = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Index</Link></li>
                <li><Link to="/searchresult">SearchResult</Link></li>
                <li><Link to="/sources">Sources</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/chapters">Chapters</Link></li>
                <li><Link to="/cat">Cat</Link></li>
            </ul>
            <Route exact path="/" component={Index}/>
            <Route exact path="/searchresult" component={SearchResult}/>
            <Route exact path="/sources" component={Sources}/>
            <Route exact path="/categories" component={Categories}/>
            <Route exact path="/chapters" component={Chapters}/>
            <Route exact path="/cat" component={Cat}/>
        </div>
    </Router>
);

export default routes;