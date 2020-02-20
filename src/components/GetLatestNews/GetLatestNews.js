import React from "react";
import { Link } from "react-router-dom";
import LatestNewsSearch from "../LatestNewsSearch/LatestNewsSearch";

class GetLatestNews extends React.Component {
	state = {};

	render() {
		return (
			<div className="GetLatestNews">
				<LatestNewsSearch></LatestNewsSearch>
			</div>
		);
	}
}

export default GetLatestNews;
