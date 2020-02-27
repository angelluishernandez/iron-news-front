import React from "react";
import LatestNewsSearch from "./LatestNewsSearch";
import IronNewsService from "../../services/IronNewsService";
import Card from "../UI/Card";

class GetLatestNews extends React.Component {
	state = {
		data: {
			queryText: "",
			articles: [],
		},
		loading: false,
		error: true,
		submited: false,
	};

	handleChange = query => {
		this.setState(prevState => ({
			data: {
				...prevState.data,
				queryText: query,
			},
		}));
	};
	handleSubmit = query => {
		IronNewsService.getLatestNews({ query })
			.then(responseArticles => {
				this.setState(prevState => ({
					data: {
						...prevState.data,
						articles: [...prevState.data.articles, responseArticles.articles],
						submited: true,
					},
				}));
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div className="GetLatestNews">
				<LatestNewsSearch
					onSearchChange={this.handleChange}
					onSubmitSearch={this.handleSubmit}
				/>
				<Card articles={this.state.data.articles}></Card>
			
			</div>
		);
	}
}


export default GetLatestNews;
