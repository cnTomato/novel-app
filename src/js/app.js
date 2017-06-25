/**
 * Created by pan on 2017/6/18.
 */
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "../scss/novel.scss"
import "../scss/common.scss"
import Index from "./enter/Index";
import SearchResult from "./enter/SearchResult";
import Sources from "./enter/Sources";
import Categories from "./enter/Categories";
import Chapter from "./enter/Chapter";
import Cat from "./enter/Cat";
// import NotFound from "./enter/NotFound";


const App = () => {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Index}/>
                <Route path='/Index' component={Index}/>
                <Route path='/searchResult' component={SearchResult}/>
                <Route path='/sources' component={Sources}/>
                <Route path='/categories' component={Categories}/>
                <Route path='/chapter' component={Chapter}/>
                <Route path='/cat' component={Cat}/>
            </div>
        </Router>
    );
};
export default App;
