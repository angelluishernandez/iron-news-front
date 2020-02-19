import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthenticatedRoute from "./components/misc/AuthenticatedRoute";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<div className="App">
			<AuthenticatedRoute>
				<NavBar />
			</AuthenticatedRoute>
			<Switch>
				<AuthenticatedRoute exact path="/">
					<Home />
				</AuthenticatedRoute>
				<Route exact path="/login" component={Login} />

				<Route exact path="/signin" component={SignIn} />
			</Switch>
		</div>
	);
}

export default App;
