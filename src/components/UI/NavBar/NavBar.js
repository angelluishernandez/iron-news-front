import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const NavBar = (props) => {
	return (
		<nav
			className="navbar  navbar-expand-lg  sidebar-main ExpandSideBar flex-container"
			id="navbar"
			role="navigation"
		>
			<div>
				<MenuOutlinedIcon className="navbar-icon" onClick={props.handleOpen} />{" "}
			</div>
			<div className="home-element">
				<div>
					<Link to={`/${props.currentUserId}`} style={{ color: "#000000" }}>
						<HomeRoundedIcon className="navbar-icon" />
					</Link>
				</div>
				<div>
					<Link to={`/${props.currentUserId}`} style={{ color: "#000000" }}>
						{" "}
						<h3>IronNews</h3>
					</Link>
				</div>{" "}
			</div>
			<div>
				<ExitToAppRoundedIcon onClick={props.handleLogout} />
			</div>
		</nav>
	);
};

export default NavBar;
