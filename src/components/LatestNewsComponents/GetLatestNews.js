import React from "react";
import { Link } from "react-router-dom";
import LatestNewsSearch from "./LatestNewsSearch";
import IronNewsService from "../../services/IronNewsService";
import Card from "../UI/Card";

class GetLatestNews extends React.Component {
	state = {
		queryText: "",

		articles: {},

		loading: false,
		error: true,
	};

	handleChange = query => {
		console.log(this.state.queryText);
		this.setState({
			queryText: query,
		});
	};
	handleSubmit(query) {
	console.log("Entra. Esta es la query=> ", query)
		IronNewsService.getLatestNews({query})
		
			.then(articlesResp => {
				console.log(this.state)
				this.setState({
					articles: articlesResp
				});
			
			})
			.catch(error => console.log(error));
	}

	render() {
		return (
			<div className="GetLatestNews">
				<LatestNewsSearch
					onSearchChange={this.handleChange}
					onSubmitSearch={this.handleSubmit}
				/>
				<Card
					articles={this.state.articles}
					loading={this.state.loading}
					error={this.state.error}
				/>
			</div>
		);
	}
}

export default GetLatestNews;
