import React from "react";
import Spinner from "../UI/Spinner";

const FiltersComponent = ({
	sources,
	authors,
	filterBySource,
	filterByAuthor,
	loadingFilters,
}) => {
	return (
		<div className="col-md-12 FiltersComponent ">
			<div className="filter-list-item">
				<h5> Sources</h5>
				{!loadingFilters ? (
					sources.map((source, index) => (
						<p
							key={index}
							onClick={(event) => filterBySource(source)}
							value={source}
							className="filter-text"
						>
							{source}
						</p>
					))
				) : (
					<Spinner />
				)}
			</div>

			{/* <div className="filter-list-item">
				<h5> Authors</h5>
				{!loadingFilters ? (
					authors.map((author, index) => (
						<p
							key={index}
							value={author}
							className="filter-text"
							onClick={(event) => filterByAuthor({ author })}
						>
							{author}
						</p>
					))
				) : (
					<Spinner />
				)}
			</div> */}
		</div>
	);
};

export default FiltersComponent;
