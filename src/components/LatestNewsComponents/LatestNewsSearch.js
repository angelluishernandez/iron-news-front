import React from "react";
import "./LatestNews.css";
import NewsSearchForm from "../UI/NewsSearchForm";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import { WithLatestNewsConsumer } from "../../contexts/LatestNewsContext";
import NewsDefaultSearch from "./NewsDefaultSearch";

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

	handleSubmit = event => {
		const { value, name } = event.target;
		event.preventDefault();
		this.setState({
			data: { [name]: value },
		});
		this.props.handleSubmitSearch();
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
						handleChangeSearch={this.props.handleChangeSearch}
						handleSubmitSearch={this.props.handleSubmitSearch}
						query={this.state.query}
					/>
					{this.state.isMoreOptionsClick && (
						<NewsSearchForm
							expandSearch={this.expandSearch}
							isMoreOptionsClick={this.state.isMoreOptionsClick}
							query={this.state.query}
							handleChangeSearch={this.props.handleChangeSearch}
							handleSubmitSearch={this.props.handleSubmitSearch}
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
