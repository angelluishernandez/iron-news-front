import React from "react";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = props => {
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
					<Link to={`/${props.currentUser._id}`} style={{ color: "#000000" }}>
						<HomeRoundedIcon className="navbar-icon" />
					</Link>
				</div>
				<div>
					<Link to={`/${props.currentUser._id}`} style={{ color: "#000000" }}>
						{" "}
						<h3>IronNews</h3>
					</Link>
				</div>{" "}
			</div>
			{props.currentUser && (
				<div>
					<ExitToAppRoundedIcon onClick={props.logout} />
				</div>
			)}
		</nav>
	);
};

export default WithAuthConsumer(NavBar);
