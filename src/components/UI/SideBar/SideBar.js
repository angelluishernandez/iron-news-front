import React from "react";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import NewsExpandList from "./NewsExpandList";
import FolderExpandList from "./FoldersExpandList";
import UserViewSideBar from "../UserViewSideBar/UserViewSideBar";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";

class SideBar extends React.Component {


	render() {
		return (
			<div className="SideBar" id="sidebar">
				<UserViewSideBar currentUser={this.props.currentUser} />
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
							handleExpandCollapseNews={this.props.handleExpandCollapseNews}
							isNewsExpanded={this.props.isNewsExpanded}
							currentUserId={this.props.currentUser._id}
						/>
						<br />
						<FolderExpandList
							handleExpandCollapseFolders={this.props.handleExpandCollapseFolders}
							isFoldersExpanded={this.props.isFoldersExpanded}
							handleDeleteFolder={this.props.handleDeleteFolder}
							currentUser={this.props.currentUser}
							folders={this.props.folders}
						/>
						<br />
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
