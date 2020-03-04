import React from "react";
import LatestNewsSearch from "./LatestNewsSearch";
import IronNewsService from "../../services/IronNewsService";
import Card from "../UI/Card";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import { WithLatestNewsConsumer } from "../../contexts/LatestNewsContext";

class GetLatestNews extends React.Component {
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
		isInLatest: true,
		articleSelected: "",
		selectedFolder: "",
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			submited: true,
			isLoading: true,
		});
	};

	getNewsData = (event, articleFilter) => {
		event.preventDefault();
		const articleSelected = this.state.data.articles.filter(
			article => article.title === articleFilter
		);
		console.log(...articleSelected);
		this.setState({
			...this.state,
			articleSelected: { ...articleSelected },
		});

		if (this.state.selectedFolder !== "") {
			IronNewsService.addNewsToFolder(
				this.state.articleSelected,
				this.state.selectedFolder
			)
				.then(response => console.log(response))
				.catch(error => console.log(error));
		}
	};

	render() {
		return (
			<div className="GetLatestNews">
				<LatestNewsSearch
					isInLatest={this.state.isInLatest}
					getNewsData={this.getNewsData}
					
				/>
				{!this.state.isLoading && <Card articles={this.state.articles} />}
			</div>
		);
	}
}

export default WithAuthConsumer(WithLatestNewsConsumer(GetLatestNews));
