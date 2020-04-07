import React from "react";
import SourcesCategory from "./SourcesCategory";
import SourcesSelectDropDown from "../SourcesDropdown/SourcesSelectDropDown";

const SearchSourcesForm = props => {
	return (
		<div className="SearchSourcesForm pb-3  pt-2">
			<form
				onSubmit={e => {
					props.handleSubmit(e);
				}}
			>
				<div className="form-group col-md-12">
					<label htmlFor="search-box">Search for category</label>

					<SourcesCategory
						handleSelectChange={props.handleSelectChange}
						name="category"
					/>
				</div>
				<div className="form-group col-md-12">
					<label htmlFor="search-box">Search for language</label>
					<SourcesCategory
						handleSelectChange={props.handleSelectChange}
						name="language"
					/>
					<SourcesSelectDropDown/>
				</div>
				<button type="submit" onClick={e => props.handleSubmit(e)} className="btn mt-3" >
					Search for sources
				</button>
			</form>
		</div>
	);
};

export default SearchSourcesForm;
