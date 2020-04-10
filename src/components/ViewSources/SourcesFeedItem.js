import React from "react";
import Spinner from "../UI/Spinner"


const SourcesFeedItem = ({ sources }) => {
	return (
		<div className="SourcesFeedItem">
			{sources ? sources.map((source) => (
				<h3>{source.name}</h3>
			)) : <Spinner/>}
		</div>
	);
};

export default SourcesFeedItem;
