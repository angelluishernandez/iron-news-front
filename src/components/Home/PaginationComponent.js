import React from "react";

const PaginationComponent = ({ newsPerPage, totalNews, paginate }) => {
	console.log(newsPerPage, totalNews);
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
		console.log(i);
		pageNumbers.push(i);
	}
	console.log(pageNumbers);
	return (
		<nav>
			<ul className="pagination justify-content-end">
				{pageNumbers.map((pageNumber) => (
					<li key={pageNumber} className="page-item">
						<a
							onClick={() => paginate(pageNumber)}
							className="page-link"
							tabindex="-1"
						>
							{pageNumber}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default PaginationComponent;
