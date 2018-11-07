import React, { Component } from "react";
import Routes from "./routes";
import Header from "./components/Header";
import Home from "./views/home";

class App extends Component {
	render(){
		return (
			<div className="App">
				<Header/>
				<Home/>
				<Routes/>
			</div>
		);
	}
}

export default App;
