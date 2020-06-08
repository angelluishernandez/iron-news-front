import React from "react";
import "./App.css";
import "./styles/styles.scss";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import GetLatestNews from "./components/LatestNewsComponents/GetLatestNews";
import Layout from "./components/UI/Layout";
import UserEdit from "./components/UserEdit/UserEdit";
import AddFolder from "./components/Folders/AddFolder";
import GetAllNews from "./components/GetAllNews/GetAllNews";
import FolderView from "./components/UI/FolderView";
import SearchForSources from "./components/SourcesComponents/SearchForSources";
import AuthenticatedRoute from "./components/AuthRoute/AuthRoute";
import { history } from "./helpers/history";
import ViewSourcesComponent from "./components/ViewSources/ViewSourcesComponent";
import FeatureNavigation from "./components/Home/FeatureNavigation";
import NewHome from "./components/Home/NewHome";

function App(props) {
	return (
		<div className="App">
			<Router history={history}>
				<AuthenticatedRoute component={Layout} />
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/signin" component={SignIn} />
					<AuthenticatedRoute
						exact
						path="/sources"
						component={SearchForSources}
					/>
					{/* If user goes to / redirect to /${props.currentUser._id} */}
					<Route exact path={"/"}>
						{props.currentUser ? (
							<Redirect to={`/${props.currentUser._id}`} />
						) : null}
					</Route>
					<AuthenticatedRoute exact path="/:id" component={NewHome} />
					<AuthenticatedRoute
						exact
						path="/folders/:id/createfolder"
						component={AddFolder}
					/>
					<Route exact path="/cards-test" component={FeatureNavigation} />
					<AuthenticatedRoute exact path={`/user/:id`} component={UserEdit} />
					<AuthenticatedRoute
						exact
						path={`/sources/feed`}
						component={ViewSourcesComponent}
					/>
					<AuthenticatedRoute
						exact
						path="/folder/:folderId/newslist"
						render={({ match }) => (
							<FolderView folderId={match.params.folderId} />
						)}
					/>
					<AuthenticatedRoute
						exact
						path="/latestnews/:id"
						component={GetLatestNews}
					/>
					<AuthenticatedRoute
						exact
						path="/getallnews/:id"
						component={GetAllNews}
					/>
					<AuthenticatedRoute
						exact
						path={"/folders/:id/createfolder"}
						component={AddFolder}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
