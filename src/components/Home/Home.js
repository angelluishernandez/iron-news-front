import React from "react";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import IronNewsService from "../../services/IronNewsService";
import Card from "../UI/Card";
import customCategoriesArray from "../../constants/customCategories";
import "./Home.css";
import Spinner from "../UI/Spinner";
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
	};

	handleChange = event => {
		const value = event.target.value;
		console.log("this is the value on handle change =>", value);
		this.setState({
			data: {
				...this.state.data,
				category: [value],
				// selectedFolder: [value]
			},
			isLoading: true,
		});
	};
	handleChangeOnFolderSelect = event => {
		console.log("entra en handlechangeonfolder=>", event.target.value);
		const value = event.target.value;
		this.setState({
			...this.state,
			selectedFolder: value,
		});
		console.log("this is the current state after changing folder", this.state);
	};
	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			submited: true,
			isLoading: true,
		});
	};

	componentDidMount() {
		IronNewsService.landing(this.state.data.category)
			.then(responseArticles => {
				this.setState({
					data: {
						category: this.state.data.category,
						articles: responseArticles.articles,
					},
					submited: false,
					isLoading: false,
				});
			})
			.catch(error => console.log(error));
	}

	getNewsData = (event, articleFilter) => {
		event.preventDefault();
		const articleSelected = this.state.data.articles.filter(
			article => article.title === articleFilter
		);
		console.log(...articleSelected);
		this.setState({
			...this.state,
			articleSelected: { ...articleSelected },
		});

		if (this.state.selectedFolder) {
			IronNewsService.addNewsToFolder(
				this.state.articleSelected,
				this.state.selectedFolder
			)
				.then(response => console.log(response))
				.catch(error => console.log(error));
		}
	};

	componentDidUpdate(_, prevState) {
		if (prevState.data.category !== this.state.data.category) {
			IronNewsService.landing(this.state.data.category)
				.then(responseArticles => {
					console.log(
						"this is the response from the api",
						responseArticles.articles
					);
					this.setState({
						data: {
							...this.state,
							category: this.state.data.category,
							articles: responseArticles.articles,
						},
						isLoading: false,
					});
				})
				.catch(error => console.log(error));
		}
	}

	render() {
		return (
			<div className="Home">
				<div className="form-container pt-3 pb-3">
					<h3>This is your feed for today</h3>
					<h3>Or look for a category</h3>
					<form className="col" onSubmit={this.handleSubmit}>
						<select
							onChange={this.handleChange}
							value={this.props.currentUser.category}
							className="custom-select custom-select-mg mt-3"
							name="category"
						><option value="" selected disabled hidden>Choose a category</option>
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
									handleChangeOnFolderSelect={this.handleChangeOnFolderSelect}
									isInFolder={false}
								></Card>
							);
						})}
					</div>
				) : (
					<Spinner/>
				)}
			</div>
		);
	}
}

export default WithAuthConsumer(Home);
