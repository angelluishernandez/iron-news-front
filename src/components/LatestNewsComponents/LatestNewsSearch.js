import React from "react";
import "./LatestNews.css";
import NewsSearchForm from "../UI/NewsSearchForm";
class LatestNewsSearch extends React.Component {
	state = {
		query: "",
		isMoreOptionsClick: false,
	};

	handleChangeSearch = event => {
		this.setState({
			query: event.target.value,
			isMoreOptionsClick: false,
		});
		this.props.onSearchChange(this.state.query);
	};
	handleSubmitSearch = event => {
		event.preventDefault();
		this.props.onSubmitSearch(this.state.query);
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
			<div className="LatestNewsSearch card">
				<form onSubmit={this.handleSubmitSearch}>
				<div className="form-group col-md-6">
					<i className="far fa-newspaper mr-5 fa-3x"></i>
					<label htmlFor="search-box">Search the latest news</label>
					<input
						type="text"
						placeholder="Search news..."
						className="form-control latest-news-search-box "
						value={this.state.query}
						name="query"
						autoComplete="off"
						onChange={this.handleChangeSearch}
					/>
				
			</div>
				<div className="search-more mt-2" onClick={this.expandSearch}>
					<p>
						Search more options
						{this.state.isMoreOptionsClick ? (
							<i className="fas fa-times more-icon ml-2"></i>
						) : (
							<i className="fas fa-plus more-icon ml-2"></i>
						)}
					</p>
				</div>
				{this.state.isMoreOptionsClick && <NewsSearchForm />}
				</form>
			</div>
		);
	}
}

export default LatestNewsSearch;
