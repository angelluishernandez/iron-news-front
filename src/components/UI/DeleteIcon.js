import React from "react";
import { WithAuthConsumer } from "../../contexts/AuthContext";

const DeleteIcon = props => {
	return (
		<div className="DeleteFolder">
				<i onClick={(event) => props.deleteFolder(event,props.userId, props.id, )}
					className="fa fa-trash"
					
				></i>
		</div>
	);
};

export default WithAuthConsumer(DeleteIcon);
