/*
 * Created by pan 2018-12-06
 */
import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => (import("./views/Home")));
const Cat = lazy(() => (import("./views/Cat")));
const List = lazy(() => (import("./views/List")));
const Sort = lazy(() => (import("./views/Sort")));
const Source = lazy(() => (import("./views/Source")));
const Chapter = lazy(() => (import("./views/Chapter")));
const Categories = lazy(() => (import("./views/Categories")));


export const Routes = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/cat" component={Cat}/>
                <Route exact path="/list" component={List}/>
                <Route exact path="/sort" component={Sort}/>
                <Route exact path="/source" component={Source}/>
                <Route exact path="/chapter" component={Chapter}/>
                <Route exact path="/categories" component={Categories}/>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>
            </Switch>
        </Suspense>
    );
};
