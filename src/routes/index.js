/*
 * Created by pan 2018/11/5
 */

import { Route, Switch } from "react-router-dom";
import Cat from "../views/cat";
import Sort from "../views/sort";
import Series from "../views/series";
import Complete from "../views/complete";
import React from "react";

export default () => {
	return (
		<Switch>
			<Route exact path='/cat' component={Cat}/>
			<Route exact path='/sort' component={Sort}/>
			<Route exact path='/series' component={Series}/>
			<Route exact path='/complete' component={Complete}/>
		</Switch>
	);
};

