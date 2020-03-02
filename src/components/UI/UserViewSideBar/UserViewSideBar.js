import React from "react";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
import "./UserViewSideBar.css";
import { Link } from "react-router-dom";

const UserViewSideBar = props => {
	
	return (
		<div className="UserViewSideBar card">
			<Link to={`/user/${props.user._id}`}>
				<img
					src={props.user.profilePic}
					alt={props.user.name}
					className="avatar"
				/>
			</Link>
			<h3>{`Welcome ${props.user.name}`}</h3>
		</div>
	);
};

export default WithAuthConsumer(UserViewSideBar);
