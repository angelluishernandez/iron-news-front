import React from "react";

const SearchSourcesForm = props => {
	return (
		<div className="SearchSourcesForm">
			<form
				onSubmit={e => {
					props.handleSubmit(e);
				}}
			>
				<div className="form-group col-md-6">
					<label htmlFor="search-box">Search for category</label>

					<input
						type="text"
						placeholder="Category"
						className="form-control latest-news-search-box "
						value={props.category}
						name="category"
						autoComplete="off"
						onChange={e => props.handleChangeSearch(e)}
					/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="search-box">Search for language</label>

					<input
						type="text"
						placeholder="Language"
						className="form-control latest-news-search-box "
						value={props.language}
						name="language"
						autoComplete="off"
						onChange={e => props.handleChangeSearch(e)}
					/>
				</div>
				<button type="submit" onClick={e => props.handleSubmit(e)}>
					Search for sources
				</button>
			</form>
		</div>
	);
};

export default SearchSourcesForm;
