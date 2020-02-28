import React from "react";
import "./SideBar.css";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

import NewsExpandList from "./NewsExpandList";
import FolderExpandList from "./FoldersExpandList";
import UserViewSideBar from "../UserViewSideBar/UserViewSideBar";
const SideBar = props => {
	return (
		<div className="SideBar" id="sidebar">
			<UserViewSideBar />
			<MenuOpenIcon
				className="closebtn"
				id="closebtn"
				onClick={props.handleClose}
			></MenuOpenIcon>
			<div className="h-100">
				<ul>
					<li className="parent-list-item">
						<h3>Home</h3>
					</li>
					<br />
					<NewsExpandList />
					<br />
					<FolderExpandList />
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
