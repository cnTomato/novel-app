/*
 * Created by pan 2018-12-06
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/Home';
import Cat from './views/Cat';
import List from './views/List';
import Sort from './views/Sort';
import Source from './views/Source';
import Chapter from './views/Chapter';
import Categories from './views/Categories';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/cat" component={Cat} />
            <Route exact path="/list" component={List} />
            <Route exact path="/sort" component={Sort} />
            <Route exact path="/source" component={Source} />
            <Route exact path="/chapter" component={Chapter} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </Switch>
    );
};
