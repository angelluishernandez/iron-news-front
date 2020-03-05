import React from "react";
import { WithAuthConsumer } from "../../contexts/AuthContext";

const DeleteNewsIcon = props => {
	return (
		
		<div className="DeleteNewsIcon">
				<i onClick={(event) => console.log(event)}
					className="fa fa-trash"
					
				></i>
		</div>
	);
};

export default WithAuthConsumer(DeleteNewsIcon);

// props.deleteNewsInFolder(event, props.currentUser._id, props.folderId 