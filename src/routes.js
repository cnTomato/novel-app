import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Index from "./components/index"
import SearchResult from "./components/searchResult"
import Sources from "./components/sources"
import Category from "./components/category"
import Chapter from "./components/chapter"
import Cat from "./components/cat"

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Index}/>
            <Route path="/searchResult" component={SearchResult}/>
            <Route path="/sources" component={Sources}/>
            <Route path="/category" component={Category}/>
            <Route path="/chapter" component={Chapter}/>
            <Route path="/cat" component={Cat}/>
        </div>
    </Router>
);
export default Routes