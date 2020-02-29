import React from "react";
import { WithAuthConsumer } from "../../contexts/AuthContext";

class NewsDefaultSearch extends React.Component {

	handleChange = event => {
		this.props.handleChangeSearch(event.target.value);
	};
	handleSubmit = event => {
		event.preventDefault();
		this.props.handleSubmitSearch(event.target.value);
	};

	handleExpand = event => {
		this.props.expandSearch();
	};
	render() {
		return (
			<div className="LatestNewsSearch card">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group col-md-6">
						<i className="far fa-newspaper mr-5 fa-3x"></i>
						<label htmlFor="search-box">Search the latest news</label>
						<input
							type="text"
							placeholder="Search news..."
							className="form-control latest-news-search-box "
							value={this.props.query}
							name="query"
							autoComplete="off"
							onChange={this.handleChange}
						/>
					</div>
					<div className="search-more mt-2" onClick={this.handleExpand}>
						<p>
							Search more options
							{this.props.isMoreOptionsClick ? (
								<i className="fas fa-times more-icon ml-2"></i>
							) : (
								<i className="fas fa-plus more-icon ml-2"></i>
							)}
						</p>
					</div>
				</form>
				<button type="submit" className="btn btn-success">
					Search
				</button>
			</div>
		);
	}
}

export default WithAuthConsumer(NewsDefaultSearch);
