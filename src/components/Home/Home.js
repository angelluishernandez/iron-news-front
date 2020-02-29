import React from "react";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import IronNewsService from "../../services/IronNewsService";
import Card from "../UI/Card";
import customCategoriesArray from "../../constants/customCategories";

class Home extends React.Component {
	state = {
		data: {
			articles: [],
			category: this.props.currentUser.customCategories,
		},
		isLoading: true,
		submited: false,
	};

	handleChange = event => {
		const value = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				category: [value],
			},
			isLoading: true,
		});
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

	componentDidUpdate(_, prevState) {
		if (prevState.data.category !== this.state.data.category) {
			IronNewsService.landing(this.state.data.category)
				.then(responseArticles => {
					this.setState({
						data: {
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
			<div>
				<h3>This is your feed for today</h3>
				<h3>Or look of a category</h3>
				<form className="mb-4" onSubmit={this.handleSubmit}>
					<select
						onChange={this.handleChange}
						value={this.props.currentUser.category}
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
					<h3>Loading ....</h3>
				)}
			</div>
		);
	}
}

export default WithAuthConsumer(Home);
