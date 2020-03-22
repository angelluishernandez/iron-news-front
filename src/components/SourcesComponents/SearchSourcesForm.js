import React from "react";
import SourcesCategory from "./SourcesCategory";

const SearchSourcesForm = props => {
	return (
		<div className="SearchSourcesForm pb-3">
			<form
				onSubmit={e => {
					props.handleSubmit(e);
				}}
			>
				<div className="form-group col-md-6">
					<label htmlFor="search-box">Search for category</label>

					<SourcesCategory
						handleChangeSearch={props.handleChangeSearch}
						name="category"
					/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="search-box">Search for language</label>
					<SourcesCategory
						handleChangeSearch={props.handleChangeSearch}
						name="language"
					/>
				</div>
				<button type="submit" onClick={e => props.handleSubmit(e)} className="btn mt-3" >
					Search for sources
				</button>
			</form>
		</div>
	);
};

export default SearchSourcesForm;
