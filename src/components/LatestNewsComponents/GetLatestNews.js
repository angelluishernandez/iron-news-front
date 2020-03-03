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

	// handleChange = data => {
	// 	console.log("this is data=>", data)
	// 	const {name, value} = data
	// 	this.setState({
	// 		...this.state,
	// 		[name]: value, 
	// 		isLoading: true,
	// 		submited: false,
	// 	});
	// 	console.log(this.state)
	// };
	// handleSubmit = (data) => {
		
	// 	const {query, source, qInTitle, language, sortBy} = this.state.data
	// 	this.setState({
	// 		...this.state, 
	// 		submited: true,
	// 		isLoading: true,
	// 		data: {
	// 			query: query,
	// 			qInTitle: qInTitle, 
	// 			source: source, 
	// 			language: language,
	// 			sortBy: sortBy,
	// 		},
	// 	});
	// 	console.log("this state on submit => ", this.state)
	// };

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
		if (prevData !== this.state.data) {
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
