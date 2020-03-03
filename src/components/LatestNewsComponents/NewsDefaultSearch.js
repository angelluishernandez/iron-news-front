import React from "react";
import { WithAuthConsumer } from "../../contexts/AuthContext";

const NewsDefaultSearch = props => {
	return (
		<div className="LatestNewsSearch card">
			<div className="form-group col-md-6">
				<i className="far fa-newspaper mr-5 fa-3x"></i>
				{props.isInLatest ? (
					<label htmlFor="search-box">Search the latest news</label>
				) : (
					<label htmlFor="search-box">Search the all news</label>
				)}

				<input
					type="text"
					placeholder="Search news..."
					className="form-control latest-news-search-box "
					value={props.query}
					name="query"
					autoComplete="off"
					onChange={event => props.handleChangeSearch(event.target)}
				/>
			</div>
			<div className="search-more mt-2" onClick={() => props.expandSearch()}>
				<p>
					Search more options
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

export default WithAuthConsumer(NewsDefaultSearch);
