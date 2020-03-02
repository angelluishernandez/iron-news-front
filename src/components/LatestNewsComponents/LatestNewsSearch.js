import React from "react";
import "./LatestNews.css";
import NewsSearchForm from "../UI/NewsSearchForm";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import { WithLatestNewsConsumer } from "../../contexts/LatestNewsContext";
import NewsDefaultSearch from "./NewsDefaultSearch";
import IronNewsService from "../../services/IronNewsService";

class LatestNewsSearch extends React.Component {
	state = {
		data: {
			query: "",
			qInTitle: "",
			source: "",
			language: "",
			sortBy: "",
		},
		isMoreOptionsClick: false,
		submited: false,
	};

	handleChange = data => {
		console.log("this is data=>", this.state.data);
		const { name, value } = data;
		this.setState({
			...this.state,

			data: { ...this.state.data, [name]: value },
			isLoading: true,
			submited: false,
		});
		console.log(this.state);
	};
	handleSubmit = event => {
		event.preventDefault();
		const { query, source } = this.state.data;
		this.setState({
			submited: true,
			isLoading: true,
			data: {
				query: query,
				// qInTitle: "coronavirus",
				source: source,
				// language: "fr",
				// sortBy: "relevancy",
			},
		});
	};

	expandSearch = event => {
		this.setState(prevState => ({
			isMoreOptionsClick: !prevState.isMoreOptionsClick,
		}));
	};

	render() {
		return (
			<div className="LatestNewsSearch">
				<form onSubmit={this.handleSubmit}>
					<NewsDefaultSearch
						expandSearch={this.expandSearch}
						isMoreOptionsClick={this.state.isMoreOptionsClick}
						handleChangeSearch={this.handleChange}
						query={this.state.query}
					/>
					{this.state.isMoreOptionsClick && (
						<NewsSearchForm
							expandSearch={this.expandSearch}
							isMoreOptionsClick={this.state.isMoreOptionsClick}
							query={this.state.query}
							handleChangeSearch={this.handleChange}
						/>
					)}
					<button type="submit" className="btn btn-success">
						Search
					</button>
				</form>
			</div>
		);
	}
}

export default WithAuthConsumer(WithLatestNewsConsumer(LatestNewsSearch));
