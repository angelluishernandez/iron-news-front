import React from "react";
import { WithAuthConsumer } from "../../contexts/AuthContext";

const DeleteIcon = props => {
	return (
		
			<i
				onClick={event => props.deleteFolder(event, props.userId, props.id)}
				className="fas fa-share-alt"
			></i>
	);
};

export default WithAuthConsumer(DeleteIcon);
