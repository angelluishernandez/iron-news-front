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
	};

	handleChange = data => {

		this.setState({
			...this.state,

			isLoading: true,
			submited: false,
		});
	};
	handleSubmit = (data) => {
		console.log("this is data on submit", data)
		const {query, source} = data
		this.setState({
			submited: true,
			isLoading: true,
			data: {
				query: query,
				// qInTitle: "coronavirus", 
				source: source
				// language: "fr",
				// sortBy: "relevancy",
			},
		});
	};

	componentDidMount() {
		//Hacer llamada a la API externa y actualizar loading a false
		// this.setState({
		// 	articles: this.props.articles,
		// });
		console.log("component did mount");
	}

	componentDidUpdate(_, prevState) {

		const prevData = prevState.data.query;
		const {query, qInTitle, language, source, sortBy} = this.state.data;

		console.log("this is prevState", prevState)
		console.log("this is body=> ", query)
		if (prevData !== query) {
			if (this.state.submited) {
				IronNewsService.getLatestNews({query, qInTitle, language, source, sortBy})

					.then(responseArticles => {
						this.setState({
							articles: responseArticles.articles,
							isLoading: false,
						});
					})
					.catch(error => console.log(error));
			}
		}
		console.log("state on update=>", this.state.data)
	}

	render() {
		return (
			<div className="GetLatestNews">
				<LatestNewsSearch
					handleChangeSearch={this.handleChange}
					handleSubmitSearch={this.handleSubmit}
				/>
				{!this.state.isLoading && <Card articles={this.state.articles} />}
			</div>
		);
	}
}

export default WithAuthConsumer(WithLatestNewsConsumer(GetLatestNews));
