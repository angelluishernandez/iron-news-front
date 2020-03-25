import React from "react";
import { WithAuthConsumer } from "../../contexts/AuthContext";

const ShareIcon = props => {
	return (
		<i
			onClick={event => props.shareFolder(event, props.userId, props.id)}
			className="fa fa-trash float-right"
		></i>
	);
};

export default WithAuthConsumer(ShareIcon);
