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
	handleSubmit = data => {
		this.setState({
			submited: true,
			isLoading: true,
			data: { query: data },
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
		const prevQuery = prevState.data.query
		const query = this.state.data.query
		if (prevQuery !== query) {
			if (this.state.submited) {
				IronNewsService.getLatestNews({query})

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
