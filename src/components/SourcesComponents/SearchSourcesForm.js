import React from "react";

const SearchSourcesForm = (props) => {
		return (
			<div className="SearchSourcesForm">
				<div className="form-group col-md-6">
          <label htmlFor="search-box">Search for category</label>


					<input
						type="text"
						placeholder="Category"
						className="form-control latest-news-search-box "
						value={props.category}
						name="category"
						autoComplete="off"
						onChange={event => props.handleChangeSearch(event.target)}
					/>
				</div>
        <div className="form-group col-md-6">
          <label htmlFor="search-box">Search for language</label>


					<input
						type="text"
						placeholder="Category"
						className="form-control latest-news-search-box "
						value={props.category}
						name="category"
						autoComplete="off"
						onChange={event => props.handleChangeSearch(event.target)}
					/>
				</div>
				
			</div>
		);
	}

export default SearchSourcesForm;
