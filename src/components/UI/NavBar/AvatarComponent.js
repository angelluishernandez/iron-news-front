import React from "react";
import { Link } from "react-router-dom";

const AvatarComponent = ({ currentUserPic, currentUserId }) => {
	return (
		<div className="AvatarComponent">
			<Link to={`/${currentUserId}/edit`}>
				<img src={currentUserPic} alt="..." />
			</Link>
		</div>
	);
};

export default AvatarComponent;
