import React from "react";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
import "./UserViewSideBar.css";
import { Link } from "react-router-dom";

const UserViewSideBar = props => {
	
	return (
		<div className="UserViewSideBar card">
			<Link to={`/user/${props.currentUser._id}`}>
				<img
					src={props.currentUser.profilePic}
					alt={props.currentUser.name}
					className="avatar"
				/>
			</Link>
			<h3>{`Welcome ${props.currentUser.name}`}</h3>
		</div>
	);
};

export default WithAuthConsumer(UserViewSideBar);
