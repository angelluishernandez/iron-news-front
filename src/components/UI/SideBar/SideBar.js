import React from "react";
import "./SideBar.css";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

import NewsExpandList from "./NewsSideBar";
import FolderExpandList from "./FoldersExpandList";
class SideBar extends React.Component {
	state = {
		activeCollapse: false,
	};

	handleExpandCollapse = (event) => {
		this.setState({
			activeCollapse: this.activeCollapse ? false : true,
		});
	};
	render() {
		return (
			<div className="SideBar" id="sidebar">
				<MenuOpenIcon
					className="closebtn"
					id="closebtn"
					onClick={this.props.handleClose}
				></MenuOpenIcon>
				<div className="h-100">
					<ul>
						<li
							className="parent-list-item"
							onClick={this.handleExpandCollapse}
						>
							<h3>Home</h3>
						</li>
						<br />
					<NewsExpandList/>
						<br />
<FolderExpandList/>
						
					</ul>
				</div>
			</div>
		);
	}
}

export default SideBar;
