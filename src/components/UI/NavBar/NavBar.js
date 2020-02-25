import React from "react";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import "./NavBar.css";

const NavBar = props => {

	return (
		<nav
			className="navbar bg-light navbar-expand-lg navbar-light sidebar-main ExpandSideBar flex-container"
			 id="navbar"
			role="navigation"
		>
			<div>
				<MenuOutlinedIcon className="navbar-icon" onClick={props.handleOpen} />{" "}
			</div>
			<div>
				<h3><HomeRoundedIcon className="navbar-icon"/>IronNews</h3>
			</div>
			<div>
				<ExitToAppRoundedIcon/>
			</div>
		</nav>
	);
};

export default WithAuthConsumer(NavBar);
