import React from "react";
import"./LatestNews.css"
import  Container  from "@material-ui/core/Container";
class LatestNewsSearch extends React.Component {
state={
	query: ""
}

	handleChangeSearch = event => {
		this.setState({
			query: event.target.value
		})
		this.props.onSearchChange(this.state.query);

	};
	handleSubmitSearch = event => {
		event.preventDefault();
		this.props.onSubmitSearch(this.state.query);
	};

	render() {
		return (

			<div className="LatestNewsSearch col-5 align-self-center card">
			
				<form onSubmit={this.handleSubmitSearch}>
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
				</form>
			</div>
			
		
		);
	}
}

export default LatestNewsSearch;
