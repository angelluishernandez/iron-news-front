import React from "react";
import languagesArray from "../../constants/languages";
import sortByArray from "../../constants/relevancy";
import { WithLatestNewsConsumer } from "../../contexts/LatestNewsContext";
import { WithAuthConsumer } from "../../contexts/AuthContext";

class NewsSearchForm extends React.Component {
	state = {
		data: {
			qInTitle: "",
			source: "",
			language: "",
			sortBy: "",
		},
		submited: false
	};
	handleChange = event => {
		this.props.handleChangeSearch(event.target.value);
	};
	handleSubmit = event => {
		event.preventDefault();
		this.props.handleSubmitSearch(event.target.value);
	};

	
	render() {
		return (
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="qInTitle">Search in headline</label>
					<input
						type="text"
						className="form-control"
						placeholder="Search in headline"
						name="qInTitle"
						onChange={this.handleChange}
					/>
				</div>

				<div className="form-group col-md-6">
					<label htmlFor="source">Source</label>
					<input
						type="text"
						className="form-control"
						placeholder="Source"
						name="source"
						onChange={this.handleChange}
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
					<select
						onChange={this.handleChange}
						className="custom-select custom-select-mg mt-3"
					>
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
					<select
						onChange={this.handleChange}
						className="custom-select custom-select-mg mt-3"
					>
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
	}
}

export default WithAuthConsumer(WithLatestNewsConsumer(NewsSearchForm));
