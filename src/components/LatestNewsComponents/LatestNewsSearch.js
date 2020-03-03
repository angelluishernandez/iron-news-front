import React from "react";
import "./LatestNews.css";
import NewsSearchForm from "../UI/NewsSearchForm";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import { WithLatestNewsConsumer } from "../../contexts/LatestNewsContext";
import NewsDefaultSearch from "./NewsDefaultSearch";
import IronNewsService from "../../services/IronNewsService";
import languagesArray from "../../constants/languages";
import Card from "../UI/Card";

class LatestNewsSearch extends React.Component {
	state = {
		data: {
			query: "",
			qInTitle: "",
			source: "",
			language: "",
			sortBy: "",
			to: "", 
			from: ""
		},
		articles: [],
		isMoreOptionsClick: false,
		submited: false,
		isInLatest: this.props.isInLatest,
	};

	handleChange = data => {
		const { name, value } = data;
		this.setState({
			...this.state,
			data: {
				...this.state.data,
				[name]: value,
			},
			isLoading: true,
			submited: false,
		});
		console.log(this.state);
	};
	handleSubmit = event => {
		event.preventDefault();
		const { query, source, qInTitle, language, sortBy, to, from} = this.state.data;
		this.setState({
			submited: true,
			isLoading: true,
			data: {
				query: query,
				qInTitle: qInTitle,
				source: source,
				language: language.toLowerCase(),
				sortBy: sortBy,
				to: to, 
				from: from
			},
		});
		console.log("this state on submit => ", this.state);
	};

	expandSearch = event => {
		this.setState(prevState => ({
			isMoreOptionsClick: !prevState.isMoreOptionsClick,
		}));
	};

	componentDidUpdate(_, prevState) {
		const { query, qInTitle, language, source, sortBy, to , from } = this.state.data;
		if (prevState.data !== this.state.data && this.state.submited) {
			if (this.props.isInLatest) {
				IronNewsService.getLatestNews({
					query,
					qInTitle,
					language,
					source,
					sortBy,
					to, 
					from
				})

					.then(responseArticles => {
						this.setState({
							articles: responseArticles.articles,
							isLoading: false,
						});
					})
					.catch(error => console.log(error));
			}
			if (!this.props.isInLatest) {
				console.log("is in latest?", this.props.isInLatest);
				IronNewsService.getAllNews({
					query,
					qInTitle,
					language,
					source,
					sortBy,
					to, 
					from
				})
					.then(responseArticles => {
						this.setState({
							articles: responseArticles.articles,
							isLoading: false,
						});
					})
					.catch(error => console.log(error));
			}
		}

		console.log("this is the state in component did update=> ", this.state);
	}

	render() {
		return (
			<div className="LatestNewsSearch">
				<form onSubmit={this.handleSubmit}>
					<NewsDefaultSearch
						expandSearch={this.expandSearch}
						isMoreOptionsClick={this.state.isMoreOptionsClick}
						handleChangeSearch={this.handleChange}
						query={this.state.query}
						isInLatest={this.props.isInLatest}
					/>
					{this.state.isMoreOptionsClick && (
						<NewsSearchForm
							expandSearch={this.expandSearch}
							isMoreOptionsClick={this.state.isMoreOptionsClick}
							query={this.state.query}
							handleChangeSearch={this.handleChange}
							isInLatest={this.props.isInLatest}
						/>
					)}
					<button type="submit" className="btn btn-success">
						Search
					</button>
				</form>
				<div>
					{!this.state.isLoading && this.state.submited ? (
						<Card articles={this.state.articles} />
					) : null}
				</div>
			</div>
		);
	}
}

export default WithAuthConsumer(WithLatestNewsConsumer(LatestNewsSearch));
