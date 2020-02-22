import React from "react";

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
			<div className="LatestNewsSearch mb-4 col-sm-4 align-self-center">
				<form onSubmit={this.handleSubmitSearch}>
					<label htmlFor="search-box">Search the latest news</label>
					<input
					
						type="text"
						placeholder="Search news..."
						className="form-control"
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
