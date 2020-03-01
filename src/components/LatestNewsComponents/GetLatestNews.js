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
		console.log("reaches get latest news handle change => ", data);
		this.setState({
			...this.state,

			isLoading: true,
			submited: false,
		});
	};
	handleSubmit = data => {
		console.log("this is data", data)
		// event.preventDefault();
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
		console.log("prev data =>", prevState.data.query);
		console.log("current data =>", this.state.data.query);
		console.log(prevState.data.query !== this.state.data.query);
		if (prevState.data.query !== this.state.data.query) {
			if (this.state.submited) {
				IronNewsService.getLatestNews(this.state.data.query)

					.then(responseArticles => {
						this.setState({
							articles: responseArticles.articles,
							isLoading: false,
						});
					})
					.catch(error => console.log(error));
			}
		}
		console.log("state after update", this.state);
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
