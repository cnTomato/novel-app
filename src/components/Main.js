/*
 * Created by pan 2018/11/3
 */
import React  from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/home"
import Cat from "../views/cat"
import Sort from "../views/sort"

export default () => (
	<Switch>
		<Route exact path='/' component={Home}></Route>
		<Route exact path='/about' component={Cat}></Route>
		<Route exact path='/contact' component={Sort}></Route>
	</Switch>
);
