import React from "react";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import NewsExpandList from "./NewsExpandList";
import FolderExpandList from "./FoldersExpandList";
import UserViewSideBar from "../UserViewSideBar/UserViewSideBar";
import { Link } from "react-router-dom";

const SideBar = props => {
	return (
		<div className="SideBar" id="sidebar">
			<UserViewSideBar currentUser={props.currentUser} />
			<MenuOpenIcon
				className="closebtn"
				id="closebtn"
				onClick={props.handleClose}
			></MenuOpenIcon>
			<div className="h-100">
				<ul>
					<li className="parent-list-item">
						<Link to={`/${props.currentUser._id}`}>
							<h3>Home</h3>
						</Link>
					</li>
					<br />
					<NewsExpandList
						handleExpandCollapseNews={props.handleExpandCollapseNews}
						isNewsExpanded={props.isNewsExpanded}
						currentUserId={props.currentUser._id}
					/>
					<br />
					<FolderExpandList
						handleExpandCollapseFolders={props.handleExpandCollapseFolders}
						isFoldersExpanded={props.isFoldersExpanded}
						currentUser={props.currentUser}
						folders={props.folders}
					/>
					<br />
					<li className="parent-list-item">
						<Link to="/sources"> Search for sources </Link>
					</li>
					<br />
					<li className="parent-list-item">
						<Link to="/sources/feed">Your sources' feed</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
