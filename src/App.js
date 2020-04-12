import React from "react";
import "./App.css";
import "./styles/styles.scss";
import { Switch, Route, Redirect, Router } from "react-router-dom";
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
import SearchForSources from "./components/SourcesComponents/SearchForSources";

import AuthenticatedRoute from "./components/AuthRoute/AuthRoute";
import { history } from "./helpers/history";
import SourcesSelectDropDown from "./components/SourcesDropdown/SourcesSelectDropDown";
import ViewSourcesComponent from "./components/ViewSources/ViewSourcesComponent";

function App(props) {
	return (
		<div className="App">
			<Router history={history}>
				<AuthenticatedRoute component={Layout} />
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/signin" component={SignIn} />
					<AuthenticatedRoute exact path="/sources">
						<SearchForSources />
					</AuthenticatedRoute>
					<Route exact path={"/"}>
						{props.currentUser ? (
							<Redirect to={`/${props.currentUser._id}`} />
						) : null}
					</Route>
					<AuthenticatedRoute
						exact
						path="/folders/:id/createfolder"
						component={AddFolder}
					/>
					<AuthenticatedRoute exact path={`/:id`} component={Home} /> */}
					<AuthenticatedRoute exact path={`/user/:id`} component={UserEdit} />
					<AuthenticatedRoute
						exact
						path={`/sources/feed`}
						component={ViewSourcesComponent}
					/>
					{/* <AuthenticatedRoute exact path="/latestnews/:id">
					<GetLatestNews />
				</AuthenticatedRoute>
				<AuthenticatedRoute exact path="/getallnews/:id">
					<GetAllNews />
				</AuthenticatedRoute>
				<AuthenticatedRoute
					exact
					path="/folder/:folderId/newslist"
					render={({ match }) => (
						<FolderView folderId={match.params.folderId} />
					)}
				/> */}
					<AuthenticatedRoute exact path={"/folders/:id/createfolder"}>
						<AddFolder />
					</AuthenticatedRoute>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
