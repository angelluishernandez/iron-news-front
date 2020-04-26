import React from "react";
import FiltersComponent from "./Filters";
import CardComponent from "./CardComponent";
import PaginationComponent from "./PaginationComponent";
import IronNewsService from "../../services/IronNewsService";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions/user.actions";
import { newsActions } from "../../redux/actions/news.actions";
import { folderActions } from "../../redux/actions/folders.actions";
import CategoryFilterComponent from "./CategoryFilterComponent";
import { reduceArr, authorReducer } from "../../helpers/reduce-arrays";

class NewHome extends React.Component {
	state = {
		data: {
			category: this.props.currentUser.customCategories,
			sources: [],
			authors: [],
			news: [],
		},
		isFiltered: false,
		filteredSources: [],
		loading: true,
		loadingFilters: true,
		submited: false,
		currentPage: 1,
		newsPerPage: 10,
		currentNews: [],
	};

	//----------------------component lifecycle----------------------//

	componentDidMount() {
		this.props.fetchFolders(this.props.currentUser._id);
		this.props
			.fetchNewsInHome(this.state.data.category)

			.then(() => {
				this.setState({
					data: {
						category: this.state.data.category,
						sources: reduceArr(this.props.news),
						authors: authorReducer(this.props.news),
						news: this.props.news,
					},
					submited: false,
					loading: false,
					isFiltered: false,
					filteredSources: [],

					//Folder variables

					isFolderSelected: false,
					selectedFolder: "",
					articleSelected: {},
				});
			})
			.catch((error) => console.log(error));
		//
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.data.category !== this.state.data.category) {
			this.props
				.fetchNewsInHome(this.state.data.category)

				.then(() => {
					this.setState({
						data: {
							...this.state.data,
							sources: reduceArr(this.props.news),
							authors: authorReducer(this.props.news),
						},
						loading: false,
						isFiltered: false,
						filteredSources: [],
					});
				})
				.catch((error) => console.log(error));
		}
	}

	//----------------------handlers----------------------//

	handleChange = (event) => {
		const value = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				category: [value],
			},
			loading: true,
			isFiltered: false,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			submited: true,
			loading: true,
		});
	};

	changePage = (pageNumber) => {
		this.setState({
			currentPage: pageNumber,
		});
	};

	filterBySource = (source) => {
		this.setState({
			isFiltered: true,
			filteredSources: this.props.news.filter(
				(article) => article.source.name === source
			),
		});
	};

	filterByAuthor = (author) => {
		this.setState({
			isFiltered: true,
			filteredSource: this.props.news.filter(
				(article) => article.author === author
			),
		});
	};

	resetFilters = () => {
		this.setState({
			isFiltered: false,
			filteredSources: [],
		});
	};

	handleChangeOnFolderSelect = (event) => {
		const folderValue = event.target.value;
		this.setState({
			selectedFolder: folderValue,
		});
	};

	getNewsData = (event, articleFilter) => {
		event.preventDefault();
		const articleSelected = this.state.data.news.filter(
			(article) => article.title === articleFilter
		);
		this.setState({
			articleSelected: { ...articleSelected },
		});
		if (this.state.selectedFolder) {
			IronNewsService.addNewsToFolder(
				this.state.articleSelected,
				this.state.selectedFolder
			)
				.then((response) => console.log(response))
				.catch((error) => console.log(error));
		}
	};

	render() {
		const indexOfLastNews = this.state.currentPage * this.state.newsPerPage;
		const indexOfFirstNews = indexOfLastNews - this.state.newsPerPage;
		const currentNews = !this.state.loading
			? this.props.news.slice(indexOfFirstNews, indexOfLastNews)
			: null;

		console.log(this.state.articleSelected);
		return (
			<div className="NewHome">
				<div className="container home-container">
					<div className="row">
						<div className="mb-3 CategoryFilterComponent">
							<CategoryFilterComponent
								category={this.props.currentUser.category}
								handleChange={this.handleChange}
								handleSubmit={this.handleSubmit}
							/>
						</div>
					</div>{" "}
					<div className="row">
						<div className="col-md-3 mt-3 mb-3 ">
							<h3 className="p-3 ">Filters</h3>
							<h6
								className="text-center reset-filters"
								onClick={this.resetFilters}
							>
								Reset Filters
							</h6>
							<FiltersComponent
								sources={this.state.data.sources}
								authors={this.state.data.authors}
								filterBySource={this.filterBySource}
								resetFilters={this.resetFilters}
								filterByAuthor={this.filterByAuthor}
							/>
						</div>
						<div className="col-md-9 cards-column">
							<CardComponent
								news={
									!this.state.isFiltered
										? currentNews
										: this.state.filteredSources
								}
								loading={this.state.loading}
								isInFolder={false}
								folders={this.props.folders}
								getNewsData={this.getNewsData}
								handleChangeOnFolderSelect={this.handleChangeOnFolderSelect}
								isInFolder={false}
							/>
							<PaginationComponent
								newsPerPage={this.state.newsPerPage}
								totalNews={
									!this.state.loading ? this.props.news.length : undefined
								}
								paginate={this.changePage}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.authentication.user,
		folders: state.folderReducer.folders,
		news: state.newsReducer.news,
	};
};

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(userActions.logout()),

	fetchFolders: (id) => dispatch(folderActions.fetchFolders(id)),

	fetchNewsInHome: (category) =>
		dispatch(newsActions.fetchNewsInHome(category)),

	deleteFolder: (currentUserId, folderId) =>
		dispatch(folderActions.deleteFolder(currentUserId, folderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewHome);
