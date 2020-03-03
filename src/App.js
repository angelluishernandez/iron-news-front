import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthenticatedRoute from "./components/misc/AuthenticatedRoute";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import GetLatestNews from "./components/LatestNewsComponents/GetLatestNews";
import Layout from "./components/UI/Layout";
import { WithAuthConsumer } from "./contexts/AuthContext";
import UserEdit from "./components/UserEdit/UserEdit";
import AddFolder from "./components/Folders/AddFolder";
import GetAllNews from "./components/GetAllNews/GetAllNews";
import FolderView from "./components/UI/FolderView";

function App() {
	return (
		<div className="App">
			<AuthenticatedRoute>
				<Layout />
			</AuthenticatedRoute>

			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/signin" component={SignIn} />
				<AuthenticatedRoute exact path={`/:id`}>
					<Home />
				</AuthenticatedRoute>
				<AuthenticatedRoute exact path={`/user/:id`}>
					<UserEdit />
				</AuthenticatedRoute>
				<AuthenticatedRoute exact path="/latestnews/:id">
					<GetLatestNews />
				</AuthenticatedRoute>
				<AuthenticatedRoute exact path="/getallnews/:id">
					<GetAllNews />
				</AuthenticatedRoute>
				<AuthenticatedRoute exact path="/folder/:folderId/newslist">
					<FolderView />
				</AuthenticatedRoute>
				<AuthenticatedRoute exact path={"/folders/:id/createfolder"}>
					<AddFolder />
				</AuthenticatedRoute>
			</Switch>
		</div>
	);
}

export default WithAuthConsumer(App);
