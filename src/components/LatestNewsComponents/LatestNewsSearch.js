import React from "react";
import NewsSearchForm from "../UI/NewsSearchForm";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import { WithLatestNewsConsumer } from "../../contexts/LatestNewsContext";
import NewsDefaultSearch from "./NewsDefaultSearch";
import IronNewsService from "../../services/IronNewsService";
import languagesArray from "../../constants/languages";
import Card from "../UI/Card";
import Spinner from "../UI/Spinner";
import CardComponent from "../Home/CardComponent";

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

	handleChange = (data) => {
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
	};
	handleSubmit = (event) => {
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

	expandSearch = (event) => {
		this.setState((prevState) => ({
			isMoreOptionsClick: !prevState.isMoreOptionsClick,
		}));
	};

	getNewsData = (event, articleFilter) => {
		console.log("this is what getnewsdata receives=>", articleFilter);
		event.preventDefault();
		const articleSelected = this.state.articles.filter(
			(article) => article.title === articleFilter
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
				.then((response) => console.log(response))
				.catch((error) => console.log(error));
		}
	};

	//----------------------component lifecycle----------------------//

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

					.then((responseArticles) => {
						this.setState({
							...this.state,
							articles: responseArticles.articles,
							isLoading: false,
						});
					})
					.catch((error) => console.log(error));
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
					.then((responseArticles) => {
						this.setState({
							...this.state,
							articles: responseArticles.articles,
							isLoading: false,
						});
					})
					.catch((error) => console.log(error));
			}
		}
	}

	//----------------------handlers----------------------//

	handleChangeOnFolderSelect = (event) => {
		const value = event.target.value;
		this.setState({
			...this.state,
			selectedFolder: value,
		});
	};

	render() {
		return (
			<div className="LatestNewsSearch container">
				<div>
					<form onSubmit={this.handleSubmit}>
						<NewsDefaultSearch
							expandSearch={this.expandSearch}
							isMoreOptionsClick={this.state.isMoreOptionsClick}
							handleChangeSearch={this.handleChange}
							query={this.state.query}
							isInLatest={this.props.isInLatest}
						/>
						<div className="container">
							{this.state.isMoreOptionsClick && (
								<NewsSearchForm
									expandSearch={this.expandSearch}
									isMoreOptionsClick={this.state.isMoreOptionsClick}
									query={this.state.query}
									handleChangeSearch={this.handleChange}
									isInLatest={this.props.isInLatest}
								/>
							)}
						</div>
						<button type="submit" className="btn btn-success">
							Search
						</button>
					</form>
				</div>
				{this.state.articles
					? console.log(
							this.state.articles,
							this.state.isLoading,
							this.state.submited
					  )
					: null}
				{!this.state.isLoading && this.state.submited ? (
					<div className="row">
						<div className="col-md-3 mt-3 mb-3 ">
							<h3 className="p-3 ">Filters</h3>
							<h6
								className="text-center reset-filters"
								onClick={this.resetFilters}
							>
								Reset Filters
							</h6>
							{/* <FiltersComponent
								sources={this.state.data.sources}
								authors={this.state.data.authors}
								filterBySource={this.filterBySource}
								resetFilters={this.resetFilters}
								filterByAuthor={this.filterByAuthor}
							/> */}
						</div>

						<div className="col-md-9 cards-column">
							<CardComponent
								news={this.state.articles}
								loading={this.state.isLoading}
							/>
						</div>
					</div>
				) : (
					<Spinner />
				)}
			</div>
		);
	}
}

export default LatestNewsSearch;
