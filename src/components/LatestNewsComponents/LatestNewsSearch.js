import React from "react";
import NewsSearchForm from "../UI/NewsSearchForm";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import { WithLatestNewsConsumer } from "../../contexts/LatestNewsContext";
import NewsDefaultSearch from "./NewsDefaultSearch";
import IronNewsService from "../../services/IronNewsService";
import languagesArray from "../../constants/languages";
import Card from "../UI/Card";
import Spinner from "../UI/Spinner";

class LatestNewsSearch extends React.Component {
	state = {
		data: {
			query: "",
			qInTitle: "",
			source: "",
			language: "",
			sortBy: "",
			to: "",
			from: "",
		},
		articles: [],
		isMoreOptionsClick: false,
		submited: false,
		isInLatest: this.props.isInLatest,
		articleSelected: "",
		selectedFolder: "",
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
		const {
			query,
			source,
			qInTitle,
			language,
			sortBy,
			to,
			from,
		} = this.state.data;
		this.setState({
			...this.state,
			submited: true,
			isLoading: true,
			data: {
				query: query,
				qInTitle: qInTitle,
				source: source,
				language: language.toLowerCase(),
				sortBy: sortBy,
				to: to,
				from: from,
			},
		});
		console.log("this state on submit => ", this.state);
	};

	expandSearch = event => {
		this.setState(prevState => ({
			isMoreOptionsClick: !prevState.isMoreOptionsClick,
		}));
	};

	getNewsData = (event, articleFilter) => {
		console.log("this is what getnewsdata receives=>", articleFilter);
		event.preventDefault();
		const articleSelected = this.state.articles.filter(
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
	componentDidUpdate(_, prevState) {
		const {
			query,
			qInTitle,
			language,
			source,
			sortBy,
			to,
			from,
		} = this.state.data;
		if (prevState.data !== this.state.data && this.state.submited) {
			if (this.props.isInLatest) {
				IronNewsService.getLatestNews({
					query,
					qInTitle,
					language,
					source,
					sortBy,
					to,
					from,
				})

					.then(responseArticles => {
						this.setState({
							...this.state,
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
					from,
				})
					.then(responseArticles => {
						this.setState({
							...this.state,
							articles: responseArticles.articles,
							isLoading: false,
						});
					})
					.catch(error => console.log(error));
			}
		}
	}
	handleChangeOnFolderSelect = event => {
		const value = event.target.value;
		this.setState({
			...this.state,
			selectedFolder: value,
		});
	};
	render() {
		return (
			<div className="LatestNewsSearch">
				<div>
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
				</div>
				<div>
					{!this.state.isLoading && this.state.submited ?
					<div className="row mt-5 mr-3 ml-3">
						 {this.state.articles.map((article, key) => {
								return (
									<Card
										title={article.title}
										url={article.url}
										urlToImage={article.urlToImage}
										description={article.description}
										publishedAt={article.publishedAt}
										getNewsData={this.getNewsData}
										key={key}
										handleChangeOnFolderSelect={this.handleChangeOnFolderSelect}
										isInFolder={false}
									/>
								);
						  })}
							</div>
						: <Spinner/> }

				</div>
			</div>
		);
	}
}

export default WithAuthConsumer(WithLatestNewsConsumer(LatestNewsSearch));
