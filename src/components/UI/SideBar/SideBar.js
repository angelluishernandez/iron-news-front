import React from "react";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

import NewsExpandList from "./NewsExpandList";
import FolderExpandList from "./FoldersExpandList";
import UserViewSideBar from "../UserViewSideBar/UserViewSideBar";
import IronNewsService from "../../../services/IronNewsService";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
class SideBar extends React.Component {
	state = {
		activeCollapseFolders: false,
		activeCollapseNews: false,
	};
	handleExpandCollapseFolders = () => {
		this.setState(prevState => ({
			...this.state,
			activeCollapseFolders: !prevState.activeCollapseFolders,
		}));
	};

	handleExpandCollapseNews = () => {
		this.setState(prevState => ({
			...this.state,
			activeCollapseNews: !prevState.activeCollapseNews,
		}));
	};

	render() {
		return (
			<div className="SideBar" id="sidebar">
				<UserViewSideBar user={this.props.user} />
				<MenuOpenIcon
					className="closebtn"
					id="closebtn"
					onClick={this.props.handleClose}
				></MenuOpenIcon>
				<div className="h-100">
					<ul>
						<li className="parent-list-item">
							<Link to={`/${this.props.currentUser._id}`}>
								<h3>Home</h3>
							</Link>
						</li>
						<br />
						<NewsExpandList
							handleCollapse={this.handleExpandCollapseNews}
							activeCollapse={this.state.activeCollapseNews}
						/>
						<br />
						<FolderExpandList
							handleCollapse={this.handleExpandCollapseFolders}
							activeCollapse={this.state.activeCollapseFolders}
							deleteFolder={this.deleteFolder}
							userId={this.props.currentUser._id}
						/>
						<li className="parent-list-item">
							<Link to="/sources"> Search for sources </Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default WithAuthConsumer(SideBar);
