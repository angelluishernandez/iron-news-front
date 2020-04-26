import React from "react";

const NewsDefaultSearch = (props) => {
	return (
		<div className="LatestNewsSearch card">
			<div className="form-group col-md-6 mt-3">
				<input
					type="text"
					placeholder="Search news..."
					className="form-control latest-news-search-box "
					value={props.query}
					name="query"
					autoComplete="off"
					onChange={(event) => props.handleChangeSearch(event.target)}
				/>
			</div>
			<div className="search-more mt-2" onClick={() => props.expandSearch()}>
				<p>
					More...{" "}
					{props.isMoreOptionsClick ? (
						<i className="fas fa-times more-icon ml-2"></i>
					) : (
						<i className="fas fa-plus more-icon ml-2"></i>
					)}
				</p>
			</div>
		</div>
	);
};

export default NewsDefaultSearch;
