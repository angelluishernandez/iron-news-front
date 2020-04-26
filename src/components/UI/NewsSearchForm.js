import React from "react";
import languagesArray from "../../constants/languages";
import sortByArray from "../../constants/relevancy";
import { WithLatestNewsConsumer } from "../../contexts/LatestNewsContext";
import { WithAuthConsumer } from "../../contexts/AuthContext";

const NewsSearchForm = (props) => {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="qInTitle">Search in headline</label>
				<input
					type="text"
					className="form-control"
					placeholder="Search in headline"
					name="qInTitle"
					onChange={(event) => props.handleChangeSearch(event.target)}
				/>
				<div className="form-group">
					<label htmlFor="source">Source</label>
					<input
						type="text"
						className="form-control"
						placeholder="Source"
						name="source"
						onChange={(event) => props.handleChangeSearch(event.target)}
					/>
				</div>

				{!props.isInLatest ? (
					<div className="form-group">
						<label htmlFor="from">From</label>
						<input
							type="date"
							className="form-control"
							placeholder="from"
							name="from"
							onChange={(event) => props.handleChangeSearch(event.target)}
						/>

						<label htmlFor="to">To</label>
						<input
							type="date"
							className="form-control"
							placeholder="to"
							name="to"
							onChange={(event) => props.handleChangeSearch(event.target)}
						/>
					</div>
				) : null}
				<div className="form-group">
					<label htmlFor="language">Language</label>
					<select
						onChange={(event) => props.handleChangeSearch(event.target)}
						className="custom-select custom-select-mg mt-3"
						name="language"
					>
						{languagesArray.map((language, index) => {
							return (
								<option key={index} value={language.code}>
									{language.flag}
									{language.name}
								</option>
							);
						})}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="sortBy">Sort By</label>
					<select
						onChange={(event) => props.handleChangeSearch(event.target)}
						className="custom-select custom-select-mg mt-3"
						name="sortBy"
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
		</form>
	);
};

export default WithAuthConsumer(WithLatestNewsConsumer(NewsSearchForm));
