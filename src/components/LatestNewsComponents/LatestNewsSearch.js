import React from "react";
import "./LatestNews.css";
import NewsSearchForm from "../UI/NewsSearchForm";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import { WithLatestNewsConsumer } from "../../contexts/LatestNewsContext";
import NewsDefaultSearch from "./NewsDefaultSearch";
class LatestNewsSearch extends React.Component {
	state = {
		isMoreOptionsClick: false,
		submited: false,
	};

	handleChange = query => {
		this.setState({
			data: {
				query: {...query}
			},
		});
	};

	handleSubmit = ({queryData}) => {
		this.setState({
			submited: true,

		});
		this.props.setQueryData(queryData);
	};

	expandSearch = event => {
		this.setState(prevState => ({
			query: this.state.query,
			isMoreOptionsClick: !prevState.isMoreOptionsClick,
		}));
	};

	render() {
		console.log(this.state.isMoreOptionsClick);
		return (
			<div className="LatestNewsSearch">
				<NewsDefaultSearch
					expandSearch={this.expandSearch}
					isMoreOptionsClick={this.state.isMoreOptionsClick}
					handleChangeSearch={this.handleChange}
					handleSubmitSearch={this.handleSubmit}
					query={this.state.query}
				/>
				{this.state.isMoreOptionsClick && (
					<NewsSearchForm
						expandSearch={this.expandSearch}
						isMoreOptionsClick={this.state.isMoreOptionsClick}
						handleChangeSearch={this.handleChange}
						handleSubmitSearch={this.handleSubmit}
						query={this.state.query}
					/>
				)}
				<button type="submit" className="btn btn-success">
					Search
				</button>
			</div>
		);
	}
}

export default WithAuthConsumer(WithLatestNewsConsumer(LatestNewsSearch));
