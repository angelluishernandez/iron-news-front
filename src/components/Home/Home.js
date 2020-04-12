import React from "react";
import IronNewsService from "../../services/IronNewsService";
import Card from "../UI/Card";
import customCategoriesArray from "../../constants/customCategories";
import Spinner from "../UI/Spinner";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions/user.actions";
import { folderActions } from "../../redux/actions/folders.actions";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
	state = {
		data: {
			articles: [],
			category: this.props.currentUser.customCategories,
		},
		isLoading: true,
		submited: false,
		articleSelected: "",
		selectedFolder: "",
		userFolders: [],
	};

	//----------------------component lifecycle----------------------//

	componentDidMount() {
		this.props.fetchFolders(this.props.currentUser._id);
		IronNewsService.landing(this.state.data.category)
			.then((responseArticles) => {
				this.setState({
					data: {
						category: this.state.data.category,
						articles: responseArticles.articles,
					},
					submited: false,
					isLoading: false,
				});
			})
			.catch((error) => console.log(error));
	}

	componentDidUpdate(_, prevState) {
		if (prevState.data.category !== this.state.data.category) {
			IronNewsService.landing(this.state.data.category)
				.then((responseArticles) => {
					this.setState({
						data: {
							...this.state,
							category: this.state.data.category,
							articles: responseArticles.articles,
						},
						isLoading: false,
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
				// selectedFolder: [value]
			},
			isLoading: true,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			submited: true,
			isLoading: true,
		});
	};

	handleChangeOnFolderSelect = (event) => {
		const value = event.target.value;
		this.setState({
			...this.state,
			selectedFolder: value,
		});
	};

	//----------------------methods----------------------//

	getNewsData = (event, articleFilter) => {
		event.preventDefault();
		const articleSelected = this.state.data.articles.filter(
			(article) => article.title === articleFilter
		);
		this.setState({
			...this.state,
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

	//----------------------render----------------------//

	render() {
		console.log("Props on home", this.props);
		return (
			<div className="Home">
				<div className="container">
					<div className="row">
						<div className=" col-md-12 form-container pt-3 pb-3 home-form ">
							<form className="" onSubmit={this.handleSubmit} value={"..."}>
								<select
									onChange={this.handleChange}
									value={this.props.currentUser.category}
									className="custom-select custom-select-mg mt-3"
									name="category"
								>
									<option selected hidden>
										Choose a category
									</option>
									{customCategoriesArray.map((category, key) => {
										return (
											<option key={key} value={category}>
												{category.charAt(0).toUpperCase() + category.slice(1)}
												{}
											</option>
										);
									})}
								</select>
							</form>
						</div>
					</div>
					<div className="container">
						{!this.state.isLoading ? (
							<div className="row mt-5 mr-3 ml-3">
								{this.state.data.articles.map((article, index) => {
									return (
										<Card
											title={article.title}
											url={article.url}
											urlToImage={article.urlToImage}
											description={article.description}
											publishedAt={article.publishedAt}
											key={index}
											getNewsData={this.getNewsData}
											handleChangeOnFolderSelect={
												this.handleChangeOnFolderSelect
											}
											isInFolder={false}
											folders={this.props.folders}
										></Card>
									);
								})}
							</div>
						) : (
							<Spinner />
						)}
					</div>
				</div>
			</div>
		);
	}
}

//----------------------redux----------------------//
const mapStateToProps = (state) => {
	console.log(state);
	return {
		currentUser: state.authentication.user,
		folders: state.folderReducer.folders,
	};
};

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(userActions.logout()),
	fetchFolders: (id) => dispatch(folderActions.fetchFolders(id)),
	deleteFolder: (currentUserId, folderId) =>
		dispatch(folderActions.deleteFolder(currentUserId, folderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
