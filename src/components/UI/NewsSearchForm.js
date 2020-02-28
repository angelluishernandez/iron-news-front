import React from "react";
import languagesArray from "../../constants/languages";
import sortByArray from "../../constants/relevancy";

const NewsSearchForm = () => {
	return (
		<div className="form-row">
			<div className="form-group col-md-6">
				<label htmlFor="qInTitle">Search in headline</label>
				<input
					type="text"
					className="form-control"
					placeholder="Search in headline"
					name="qInTitle"
				/>
			</div>

			<div className="form-group col-md-6">
				<label htmlFor="source">Source</label>
				<input
					type="text"
					className="form-control"
					placeholder="Source"
					name="source"
				/>
			</div>

			{/* Search by data => look for a method */}
			{/* <div className="form-group col-md-6">
      <label htmlFor="from">Language</label>
      <input type="text" className="form-control"  placeholder="from"/>
    </div> */}

			{/* <div className="form-group col-md-6">
      <label htmlFor="to">Language</label>
      <input type="text" className="form-control"  placeholder="to"/>
    </div> */}

			<div className="form-group col-md-6">
				<label htmlFor="language">Language</label>
				<select>
					{languagesArray.map((language, index) => {
						return (
							<option key={index} value={language}>
								{language.flag}
								{language.name}
							</option>
						);
					})}
				</select>
			</div>
			<div className="form-group col-md-6">
				<label htmlFor="sortBy">Sort By</label>
				<select>
					{sortByArray.map((sorter, index) => {
						return (
							<option key={index} value={sorter}>
								{sorter.charAt(0).toUpperCase() + sorter.slice(1)}{" "}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

export default NewsSearchForm;
