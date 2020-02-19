import React from "react";
import { Link } from "react-router-dom";
import IronNewsService from "../../services/IronNewsService";

class LatestNewsCard extends React.Component {
	state = {
		data: {
			headline: "",
			query: "",
		},
		error: true,
		loading: false,
	};
	handleChange = event => {
		const { name, value } = event.target;
		console.log(this.state.data);
		this.setState({
			data: { ...this.state.data, [name]: value },
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		this.setState({ loading: true, error: false }, () => {
			IronNewsService.getLatestNews(this.state.data.query)
				.then(response => console.log(response))
				.catch(error => console.log(error));
		});
	};

	render() {
		const headline = this.state.data.headline;
		return (
			<div className="LatestNewsCard">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="query">Topic</label>
					<input
						type="text"
						value={this.state.data.topic}
						onChange={this.handleChange}
						placeholder="Insert a topic"
						name="query"
					/>
				</form>
			</div>
		);
	}
}

export default LatestNewsCard;
