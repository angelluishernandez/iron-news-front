import React from "react";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import IronNewsService from "../../services/IronNewsService";
import Card from "../UI/Card";
import customCategoriesArray from "../../constants/customCategories";

class Home extends React.Component {
	state = {
		data: {
			articles: [],
			category: "",
		},
		isLoading: true,
		submited: false,
	};

	handleChange = event => {
		const value = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				category: value,
			},
		});
	};

	// Crear método que haga petición la API


	handleSubmit = event => {
		event.preventDefault();
		IronNewsService.landing(this.state.data.category).then(() => {
			console.log(this.state.data.category);
			this.setState({
				submited: true,
				isLoading: true,
			}).catch(error => console.log(error));
		});
	};

	componentDidMount() {
			IronNewsService.landing()
				.then(responseArticles => {
					this.setState({
						data: {
							articles: responseArticles.articles,
						},
						isLoading: false,
					});
				})
				.catch(error => console.log(error));
		} 
	



	componentDidUpdate(prevState) {
		if (prevState.data.category !== this.state.category) {
			// peticion con la nueva categoria y setstate en el then
		}
	}

	render() {
		return (
			<div>
				<h3>This is your feed for today</h3>
				<h3>Or look of a category</h3>
				<form className="mb-4" onSubmit={this.handleSubmit}>
					<select
						onChange={this.handleChange}
						value={this.state.data.category}
						className="custom-select custom-select-mg mt-3"
						name="category"
					>
						{customCategoriesArray.map((category, key) => {
							return (
								<option key={key} value={category}>
									{category.charAt(0).toUpperCase() + category.slice(1)}
									{}
								</option>
							);
						})}
					</select>
					<button
						type="submit"
						className="btn btn-success"
						disabled={this.state.isLoading}
					>
						Search ...
					</button>
				</form>

				{!this.state.isLoading ? (
					<Card articles={this.state.data.articles} />
				) : (
					<h3> Loading ... </h3>
				)}
			</div>
		);
	}
}

export default WithAuthConsumer(Home);

// import React from "react";
// import { WithAuthConsumer } from "../../contexts/AuthContext";
// import IronNewsService from "../../services/IronNewsService";
// import Card from "../UI/Card";
// import customCategoriesArray from "../../constants/customCategories";

// class Home extends React.Component {
// 	state = {
// 		data: {
// 			articles: [],
// 			category: "",
// 		},
// 		// isLoading: true,
// 		// submited: false,
// 	};

// 	handleChange = event => {
// 		console.log("this is the target value=> ", event.target.name);
// 		const [name, value] = event.target;
// 		this.setState({
// 			data: {
// 				...this.state.data,
// 				[name]: value,
// 			},
// 		});
// 	};

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevState !== this.state) {
// 			console.log("state in didUpdate =>", this.state);
// 			return true;
// 			// IronNewsService.landing(this.state.data.category)
// 			// 	.then(responseArticles => {
// 			// 		this.setState({
// 			// 			data: {
// 			// 				...this.state.data,
// 			// 				articles: [responseArticles],
// 			// 			},
// 			// 		});
// 			// 	})
// 			// 	.catch(error => console.log(error));
// 		}
// 	}
// 	handleSubmit = event => {
// 		event.preventDefault();
// 		console.log("this is the target value=> ", event.target.value);
// 		// this.getArticlesByCategory(event.target.value);
// 		this.setState({
// 			data: { ...this.state.data, category: event.target.value },
// 			isLoading: false,
// 			submited: true,
// 		});
// 		console.log("state on submit=>", this.state);
// 	};

// 	// getArticlesByCategory(category) {
// 	// 	IronNewsService.landing(category)
// 	// 		.then(responseArticles => {
// 	// 			this.setState({
// 	// 				data: {
// 	// 					...this.state.data,
// 	// 					articles: responseArticles.articles,
// 	// 				},
// 	// 				isLoading: false,
// 	// 			});
// 	// 		})
// 	// 		.catch(error => console.log(error));
// 	// }

// 	// componentDidMount() {
// 	// 	this.getArticlesByCategory(this.props.currentUser.customCategory);
// 	// }

// 	// componentDidUpdate(prevProps, prevState) {
// 	// 	// console.log("=========================================");
// 	// 	// console.log("This is prevState => ", prevState.data.category);
// 	// 	// console.log("This is newCategory => ", this.state.data.category);

// 	// 	const prevCategory = prevState.data.category;
// 	// 	const newCategory = this.state.data.category;
// 	// 	if (prevCategory !== newCategory && this.state.submited) {
// 	// 		// peticion con la nueva categoria y setstate en el then
// 	// 		console.log("Supera el if? =>", newCategory);
// 	// 		return true;
// 	// 		// this.getArticlesByCategory(newCategory);
// 	// 	}
// 	// }

// 	render() {
// 		return (
// 			<div>
// 				<h3>This is your feed for today</h3>
// 				<h3>Or look of a category</h3>
// 				<form className="mb-4" onSubmit={this.handleSubmit}>
// 					<select
// 						onChange={this.handleChange}
// 						value={this.state.data.category}
// 						className="custom-select custom-select-mg mt-3"
// 						name="category"
// 					>
// 						{customCategoriesArray.map((category, key) => {
// 							return (
// 								<option key={key} value={category} name="category">
// 									{category.charAt(0).toUpperCase() + category.slice(1)}
// 									{}
// 								</option>
// 							);
// 						})}
// 					</select>
// 					<button
// 						type="submit"
// 						className="btn btn-success"
// 						disabled={this.state.isLoading}
// 					>
// 						Search ...
// 					</button>
// 				</form>
// 				{/* {!this.state.isLoading ? ( */}
// 				<Card articles={this.state.data.articles} />
// 				{/* ) : (
// 					<h3>Loading ...</h3>
// 				)} */}
// 			</div>
// 		);
// 	}
// }

// export default WithAuthConsumer(Home);
