import React from "react";
import { Link } from "react-router-dom";

const UserViewSideBar = (props) => {
	return (
		<div className="UserViewSideBar card">
			<Link to={`/user/${props.currentUser._id}`}>
				<img
					src={props.currentUser.profilePic}
					alt={props.currentUser.name}
					className="avatar"
				/>
			</Link>
		</div>
	);
};

export default UserViewSideBar;
