import React from "react";
import LatestNewsSearch from "../LatestNewsComponents/LatestNewsSearch";
import Card from "../UI/Card";
import { WithAuthConsumer } from "../../contexts/AuthContext";

class GetAllNews extends React.Component {
	state = {
		data: {
			query: "",
			qInTitle: "",
			source: "",
			language: "",
			sortBy: "",
		},
		articles: [],
		isLoading: true,
		error: true,
    submited: false,
    isInLatest : false
	};

	render() {
		return (
			<div className="GetAllNews">
				<LatestNewsSearch isInLatest={this.state.isInLatest} />
				{!this.state.isLoading && <Card articles={this.state.articles} />}
			</div>
		);
	}
}

export default WithAuthConsumer(GetAllNews);
