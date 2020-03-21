import React from "react";
import SourceItem from "./SourceItem";

const SourcesList = props => {
	return (
		<div className="SourcesList mt-5">
			<div>
				{props.sources.map((source, index) => (
					<SourceItem source={source} key={index} className="m-2" />
				))}
			</div>
		</div>
	);
};

export default SourcesList;
