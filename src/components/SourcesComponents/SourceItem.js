import React from "react";

const SourceItem = ({ source }) => {
	return (
		<div className="SourceItem card">
			<a href={source.url} target="blank">
				<h3>{source.name}</h3>
				
			</a>
      <p>{source.description}</p>
		</div>
	);
};

export default SourceItem;
